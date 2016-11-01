window.onload = function() {
	var scwidth = view().w1;
	var sumwidth = parseInt(scwidth*3);

	// window.body.width = scwidth;
	// gettag('header')[0].width = scwidth;
	// console.log(gettag('header')[0].width);
	var imgbox = getcla('imgbox'); 
    for (var i = 0; i < imgbox.length; i++) {
        imgbox[i].index = i;
        /*imgbox[i].width = scwidth+'px';*/
        console.log(imgbox[i].style.width);
    }
    var carousel = getcla('carousel')[0];
    carousel.style.left = 0 + 'px';
    var imgArri = imgbox;
    function animate(ele, offset) {
        ele.style.left = parseInt(ele.style.left) + offset + 'px';
        if (parseInt(ele.style.left) <= -sumwidth) {
            ele.style.left = 0 + 'px';
        }
    }
    var timer = setInterval(function() {
        animate(carousel, -scwidth);
    }, 2000);
};
