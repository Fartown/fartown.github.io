
function setCenter (className) {
	 var logolist = document.getElementsByClassName(className);
		var lilogoheight = logolist[0].offsetHeight;
		for (var i = 0; i < logolist.length; i++) {
		logolist[i].style.lineHeight = lilogoheight + 'px';
		}  
}
setCenter('lilogo');
setCenter('taba');