$(document).ready(function(){var h=$("header"),k=$(".nav-toggle"),d=$(".main-nav"),c=$(".main-nav li"),e=$("#service"),j=$("#academy"),a=$("#club"),b=$("#organization"),f=$("#graduate");$(window).on("scroll",{previousTop:0},function(m){var l=$(window).scrollTop();if(l<this.previousTop){if(l>0&&h.hasClass("fixed")){h.addClass("visible")}else{h.removeClass("visible fixed")}}else{h.removeClass("visible");if(l>41&&!h.hasClass("fixed")){h.addClass("fixed")}}this.previousTop=l});c.find("a").click(function(m){c.find("a").removeClass("selected");$(this).addClass("selected");k.find(".nav-toggle-btn").toggleClass("open");d.toggle("fast");d.toggleClass("show");var l=$(this).attr("href");var n=$(l).offset().top;$("html,body").animate({scrollTop:n},400)});i(e);i(j);i(a);i(b);i(f);g(e);g(j);g(a);k.click(function(l){k.find(".nav-toggle-btn").toggleClass("open");d.toggle("fast");d.toggleClass("show")});document.addEventListener("touchmove",function(l){if(d.hasClass("show")){l.preventDefault();l.stopPropagation()}},false);function g(m){var l=m.find(".tab-bar li"),o=m.find(".link-bar"),n,p;l.click(function(q){n=$(this).index();l.removeClass("on");$(this).addClass("on");o.removeClass("selected").eq(n).addClass("selected");i(m)})}function i(l){var m=l.find(".link-bar.selected .links").height();l.height(m+90)}});
// 百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d28b9df07f502e397f1ce283fae38183";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
// 谷歌统计

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-88810325-1', 'auto');
  ga('send', 'pageview');
