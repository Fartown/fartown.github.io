(function(w) {

    function Circle(posX, posY, radius, color) {
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.color = color;

        var listeners = {};

        if (typeof Circle.initalized === 'undefined') {
            Circle.prototype.draw = function(context) {
                context.fillStyle = color;
                context.beginPath();
                context.arc(posX, posY, radius, 0, 2 * Math.PI, true);
                context.fill();
            }

            Circle.prototype.has = function(coordinate) {
                if ((coordinate.x >= (posX - radius) && coordinate.x <= (posX + radius)) && (coordinate.y >= (posY - radius) && coordinate.y <= (posY + radius))) {
                    return true;
                }
                return false;
            }

            Circle.prototype.setCoordinate = function(x, y) {
                posX = x;
                posY = y;
            }

            Circle.prototype.emit = function(eventType, e) {
                listeners[eventType] && listeners[eventType].forEach(function(func) {
                    func(e);
                })
            }

            Circle.prototype.addEventListener = function(eventType, listener) {
                if (!listeners[eventType]) {
                    listeners[eventType] = [];
                }
                listeners[eventType].push(listener)
            }

            Circle.prototype.removeEventListener = function(eventType, listener) {
                if (listeners[eventType]) {
                    var funcs = listeners[eventType];
                    var index;
                    if ((index = funcs.indexOf(listener)) > -1) {
                        funcs.splice(index, 1);
                    }
                }
            }

            Circle.initalized = true;
        }
    }

    function Helper(canvas) {
        this.canvas = canvas;
        var shapes = this.shapes = [];

        var rect = canvas.getBoundingClientRect();
        var canvasX = rect.left;
        var canvasY = rect.top;
        canvas.addEventListener('mousedown', function(e) {
            var currentX = e.x - canvasX;
            var currentY = e.y - canvasY;

            for (var i = 0; i < shapes.length; i++) {
                var shape = shapes[i];
                if (shape.has({ x: currentX, y: currentY })) {
                    shape.emit('mousedown', e);
                    break;
                }
            }

        })

        canvas.addEventListener('mousemove', function(e) {
            shapes.forEach(function(shape) {
                e.x = e.x - canvasX;
                e.y = e.y - canvasY;
                shape.emit('mousemove', e);
            })
        })

        if (typeof Helper.initalized === 'undefined') {
            Helper.prototype.add = function(shape) {
                shapes.push(shape);
            }
            Helper.prototype.repaint = function() {
                var context = canvas.getContext('2d');
                context.clearRect(0, 0, canvas.width, canvas.height);
                shapes.forEach(function(shape) {
                    shape.draw(context);
                })
            }

            Helper.initalized = true;
        }
    }

    window.Helper = Helper;
    window.Helper.Circle = Circle;

})(window)
