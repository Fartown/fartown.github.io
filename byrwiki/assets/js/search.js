var sAddress = document.getElementsByTagName("form")[0];
var sInfor = document.getElementById("search");
var sBaidu = document.getElementById("baidu");
var sGoogle = document.getElementById("google");
var sGoogle1 = document.getElementById("google1");
var sjd = document.getElementById("jd");
var stianmao = document.getElementById("tianmao");
var staobao = document.getElementById("taobao");
var sWeixin = document.getElementById("weixin");
var sZhihu = document.getElementById("zhihu");
var sweibo = document.getElementById("weibo");
var sdouban = document.getElementById("douban");
var sgequ = document.getElementById("gequ");
var stieba = document.getElementById("tieba");
var sgithub = document.getElementById("github");
var swangpan = document.getElementById("wangpan");

//百度
sBaidu.onclick = function() {
        sAddress.action = "http://www.baidu.com/s";
        sInfor.name = "wd";
    };
    //Google
sGoogle.onclick = function() {
    sAddress.action = "http://www.google.com/search";
    sInfor.name = "q";
};
//Google镜像
$('#google1').click(function() {
    var query = $('#search').val();
    if (query) {
        window.open("https://guso.ml/search?q=" + query, "_blank");
        return false;
    };
});

//京东（已修复）在移动端访问会跳出两次窗口（已修复）

$('#jd').click(function() {
    var query = $('#search').val();
    if (query) {
        window.open("http://search.jd.com/Search?enc=utf-8&keyword=" + query, "_blank");
        return false;
    };
});



//淘宝
staobao.onclick = function() {
    sAddress.action = "https://s.taobao.com/search?";
    sInfor.name = "q";
};

//微信  恢复上线
$('#weixin').click(function() {
    var query = $('#search').val();
    if (query) {
        window.open("http://weixin.sogou.com/weixin?type=2&query=" + query + "&ie=utf8", "_blank");
        return false;

    };
});

//知乎
sZhihu.onclick = function() {
        sAddress.action = "https://www.zhihu.com/search";
        sInfor.name = "q";
        sInfor.type = "question";
    }
    //    //微博 （检索异常）
    //    sweibo.onclick=function(){
    //      sAddress.action="http://s.weibo.com/weibo/?";
    //      //sInfor.name="q";
    //      //sInfor.type="question";
    //    }
$('#weibo').click(function() {
    var query = $('#search').val();
    if (query) {
        window.open("http://s.weibo.com/weibo/" + query, "_blank");
        return false;
    };
});

//豆瓣
sdouban.onclick = function() {
        sAddress.action = "https://www.douban.com/search?";
        sInfor.name = "q";
        //sInfor.type="question";
    }
    //hao123 音乐
// sgequ.onclick = function() {
//     sAddress.action = "http://music.hao123.com/search?";
//     sInfor.name = "key";
//     sInfor.type = "1";
// }


//改用网易云音乐检索 移动端检索出现异常

$('#gequ').click(function() {
    var query = $('#search').val();
    if (query) {
        window.open("http://music.163.com/#/search/m/?s=" + query + "&type=1", "_blank");
        return false;

    };
});



// 胖次  另一个检索入口

$('#panci').click(function() {
    var query = $('#search').val();
    if (query) {
        window.open("http://www.panc.cc/s/" + query + "/td_0", "_blank");
        return false;

    };
});

//慕课
$('#mooc').click(function() {
    var query = $('#search').val();
    if (query) {
        window.open("http://www.icourse163.org/search.htm?search=" + query, "_blank");
        return false;

    };
});


//github
sgithub.onclick = function() {
    sAddress.action = "https://github.com/search?";
    //sInfor.type="author";
    sInfor.name = "q";
}

//胖次网，网盘资源检索
//swangpan.onclick=function(){
//sAddress.action="http://www.panc.cc/s";
//sInfor.type="author";
//sInfor.name="q";
//}


function SetHome(obj, vrl) {
    try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(vrl);
    } catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl);
        }
    }
}

function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    } catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        } catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
