// Programmed by LucyShawYang
// Created on 2019.1.28
// Last Modified on 2019.1.28

function highlightPage()
{
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    
    var headers = document.getElementsByTagName("header");
    if(headers.length == 0) return false;
    
    var navs = headers[0].getElementsByTagName("nav");
    if(navs.length == 0) return false;

    var links = navs[0].getElementsByTagName("a");
    for(var i = 0; i < links.length; i++)
    {
        var linkurl = links[i].getAttribute("href");
        if(window.location.href.indexOf(linkurl) != -1) //如果当前页面的链接的字串中包含linkurl
        {
            links[i].className = "here";

            var linktext = linds[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id", linktext);
        }
    }
}

addLoadEvent(highlightPage);
//window.onload = highlightPage;