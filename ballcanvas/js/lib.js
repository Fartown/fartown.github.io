(function(window) {

    //关于事件兼容性处理
    var eventUtil = {
        addEvent: function(event, func, bool) {
            bool = bool || false;
            if (this.addEventListener) {
                this.addEventListener(event, func, bool)
            } else {
                this.attachEvent('on' + event, func, bool);
            }
        },
        removeEvent: function(event, func, bool) {
            bool = bool || false;
            if (this.removeEventListener) {
                this.removeEventListener(event, func, bool);
            } else {
                this.detachEvent('on' + event, func, bool);
            }
        },
        getEvent: function(event) {
            return event || window.event;
        },
        getTarget: function(event) {
            return event.target || event.srcElement;
        }
    };
    for (key in eventUtil) {
        HTMLElement.prototype[key] = eventUtil[key];
    };
    Array.prototype.remove = function(item) {
        var index = this.indexOf(item);
        if (index != -1) {
            return this.splice(index, 1);
        } else {
            return this;
        }
    };

    //运动员对象
    var SoccerPlayer = function(context, centerX, centerY, radius, ring, color, text) {
        this.x = centerX;
        this.y = centerY;
        this.radius = radius;
        this.ring = ring;
        this.strokeStyle = color;
        this.context = context;
        this.text = text || 0;
        this.update();
    };

    SoccerPlayer.prototype = {
        drawCircle: function() {
            this.context.save();
            this.context.beginPath();
            this.context.strokeStyle = this.strokeStyle;
            this.context.fillStyle = this.strokeStyle;
            this.context.lineWidth = 1;
            this.context.moveTo(this.x + this.radius + 0.5, this.y);
            this.context.arc(this.x, this.y, this.radius + 0.5, 0, Math.PI * 2, true);
            this.context.moveTo(this.x + this.radius + this.ring + 0.5, this.y);
            this.context.arc(this.x, this.y, this.radius + this.ring + 0.5, 0, Math.PI * 2, false);
            this.context.closePath();
            this.context.fill();
            this.context.restore();
        },
        drawText: function() {
            this.context.save();
            this.context.textAlign = 'center';
            this.context.textBaseline = 'middle';
            this.context.strokeText(this.text, this.x, this.y);
            this.context.restore();
        },
        move: function(x, y) {
            this.x = x;
            this.y = y;
        },
        update: function() {
            this.drawCircle();
            this.drawText();
        },
        inCircle: function(x, y) {
            if (Math.abs(x - this.x) <= this.radius && Math.abs(y - this.y) <= this.radius) {
                return true;
            };
            return false;
        }
    };

    //状态栈,用于撤销恢复当前绘制的状态
    var statusStack = function() {
        this.status = [];
        this.currentIndex = 0;
    };
    statusStack.prototype = {
        push: function(val) {
            this.currentIndex = 0;
            this.status.push(val);
            if (this.status.length > 12) {
                this.status.shift();
                return this.status;
            }
            return this.status;
        },
        pop: function() {
            this.currentIndex = 0;
            this.status = this.status.slice(0, this.status.length - 1);
            return this.status;
        },
        undo: function() {
            if (this.currentIndex < this.status.length) {
                return this.status[this.status.length - (++this.currentIndex)];
            }
        },
        redo: function() {
            if (this.currentIndex > 0) {
                return this.status[this.status.length - (--this.currentIndex)];
            }
        },
        clear: function() {
            this.status = [];
        }
    };
    //球员对象,线段对象栈
    var objStack = function() {
        this.status = [];
    };
    objStack.prototype = {
        push: function(val) {
            this.status.push(val);
            return this.status;
        },
        pop: function() {
            this.status = this.status.slice(0, this.status.length - 1);
            return this.status;
        }
    };

    //画线
    function drawLine(ctx, start, end, control, color) {
        this.start = start;
        this.end = end;
        this.ctx = ctx;
        this.ctrl = control;
        this.color = color;
        if (!this.ctrl) {
            this.drawFulline();
        } else {
            this.drawCurve();
        };
    };
    drawLine.prototype = {
        drawFulline: function() {
            this.ctx.save();
            this.ctx.strokeStyle = this.color || 'black';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(this.start.x, this.start.y);
            this.ctx.lineTo(this.end.x, this.end.y);
            this.ctx.closePath();
            this.ctx.stroke();
            this.ctx.restore();
        },
        drawCurve: function() {
            this.ctx.save();
            this.ctx.strokeStyle = this.color || 'black';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(this.start.x, this.start.y);
            this.ctx.quadraticCurveTo(this.ctrl.x, this.ctrl.y, this.end.x, this.end.y);
            // this.ctx.closePath();
            this.ctx.stroke();
            this.ctx.restore();
        },
        update: function() {
            if (!this.ctrl) {
                this.drawFulline();
            } else {
                this.drawCurve();
            };
        }
    };
    window.objStack = objStack;
    window.SoccerPlayer = SoccerPlayer;
    window.statusStack = statusStack;
    window.drawLine = drawLine;
})(window);

//获取图片宽高
function getImg(img) {
    if (img.naturalWidth) {
        return {
            h: img.naturalHeight,
            w: img.naturalWidth
        }
    } else {
        var imgObj = new Image();
        imgObj.src = img.src;
        return {
            h: imgObj.height,
            w: imgObj.width
        }
    }
};

//获取鼠标位置
function canvasMousePos(ele, event) {
    var x = document.documentElement.scrollLeft || document.body.scrollLeft + event.clientX || event.pageX,
        y = event.clientY || event.pageY + document.documentElement.scrollTop || document.body.scrollTop;
    return {
        x: x - ele.offsetParent.offsetLeft,
        y: y - ele.offsetParent.offsetTop
    }
};

