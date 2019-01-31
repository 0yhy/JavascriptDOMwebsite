// Programmed by LucyShawYang
// Created on 2019.1.29
// Last Modified on 2019.1.29

function prepareInternalnav()       //准备内部导航
{
    var articles = document.getElementsByTagName("article");
    if(articles.length == 0) return false;

    var navs = articls[0].getElementsByTagName("nav");
    if(navs.length == 0) return false;

    var links = navs[0].getElementsByTagName("a");
    for(var i = 0; i < links.length; i++)
    {
        var sectionId = links[i].getAttribute("href").split("#")[1];    //split根据#分隔符将字符串分为两部分，我们要的id是后一个元素；
        if(!document.getElementById(sectionId)) continue;               //如果不存在带有相应id的元素，则进行下一个循环；
        document.getElementById(sectionId).style.display = none;        //默认隐藏所有部分；
        links[i].destination = sectionId;                               //因为sectionId是局部变量，等到事件处理函数执行时它就不存在了，
                                                                        //因此我们为每个链接创建一个属性并将sectionId的值赋给它。
        links[i].onclick = function()
        {
            showSection(this.destination);
            return false;
        }
    }
}
addLoadEvent(prepareInternalnav);