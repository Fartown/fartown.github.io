// 获取宽高
function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
        h1:window.screen.availHeight,
        w1:window.screen.availWidth
    };
}
function getid(obj) {
    return document.getElementById(obj);
}
function getcla(obj) {
    return document.getElementsByClassName(obj);
}
function gettag (obj) {
	 return document.getElementsByTagName(obj); 
}