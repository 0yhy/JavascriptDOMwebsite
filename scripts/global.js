// Programmed by LucyShawYang
// Created on 2019.1.28
// Last Modified on 2019.1.29

function addClass(element, value)
{
    if(!element.className)
    {
        element.className = value;
    }
    else
    {
        element.className = element.className + " " + value;
    }
}

function addLoadEvent(func)
{
    var oldonload = window.onload;
    if(typeof oldonload != "function")
    {
        window.onload = func;
    }
    else
    {
        window.onload = function()
        {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement)
{
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement)
    {
        parent.appendChild(newElement, targetElement);
    }
    else
    {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
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

            var linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id", linktext);
        }
    }
}

addLoadEvent(highlightPage);

function moveElement(elementID, final_x, final_y, interval)
{
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;

    var elem = document.getElementById(elementID);
    if(elem.movement) clearTimeout(elem.movement);

    if(!elem.style.left) elem.style.left = "0px";
    if(!elem.style.top) elem.style.top = "0px";

    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos == final_x && ypos == final_y) return true;

    if(xpos < final_x)
    {
        var dist = Math.ceil((final_x - xpos) / 10);
        xpos += dist;
    }
    if(xpos > final_x)
    {
        var dist = Math.ceil((xpos - final_x) / 10);
        xpos -= dist;
    }
    if(ypos < final_y)
    {
        var dist = Math.ceil((final_y - ypos) / 10);
        ypos += dist;
    }
    if(ypos > final_y)
    {
        var dist = Math.ceil((ypos - final_y) / 10);
        ypos -= dist;
    }

    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";

    var funcName = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    elem.movement = setTimeout(funcName, interval);
}

function prepareSlideshow()
{
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("intro")) return false;
    
    var intro = document.getElementById("intro");

    var slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");

    var preview = document.createElement("img");
    preview.setAttribute("src", "images/slideshow.gif");
    preview.setAttribute("alt", "a glimpse of what awaits you");
    preview.setAttribute("id", "preview");

    var frame = document.createElement("img");
    frame.setAttribute("src", "images/frame.gif");
    frame.setAttribute("alt", "");
    frame.setAttribute("id", "frame");

    slideshow.appendChild(preview);
    slideshow.appendChild(frame);
    insertAfter(slideshow, intro);

    var links = document.getElementsByTagName("a");
    
    for(var i = 0; i < links.length; i++)
    {
        links[i].onmouseover = function()
        {
            var destination = this.getAttribute("href");

            if(destination.indexOf("index.html") != -1)
            {
                moveElement("preview", 0, 0, 5);
            }
            if(destination.indexOf("about.html") != -1)
            {
                moveElement("preview", -150, 0, 5);
            }
            if(destination.indexOf("photos.html") != -1)
            {
                moveElement("preview", -300, 0, 5);
            }
            if(destination.indexOf("live.html") != -1)
            {
                moveElement("preview", -450, 0, 5);
            }
            if(destination.indexOf("contact.html") != -1)
            {
                moveElement("preview", -600, 0, 5);
            }
        }
    }
}

addLoadEvent(prepareSlideshow);

function showSection(id)                                    //显示符合当前id的section
{
    var sections = document.getElementsByTagName("section");
    for(var i = 0; i < sections.length; i++)
    {
        var section = sections[i];
        if(section.getAttribute("id") != id)
        {
            section.style.display = "none";
        }
        else
        {
            section.style.display = "block";
        }
    }
}

function prepareInternalnav()       //准备内部导航
{
    var articles = document.getElementsByTagName("article");
    if(articles.length == 0) return false;

    var navs = articles[0].getElementsByTagName("nav");
    if(navs.length == 0) return false;

    var links = navs[0].getElementsByTagName("a");
    for(var i = 0; i < links.length; i++)
    {
        var sectionId = links[i].getAttribute("href").split("#")[1];    //split根据#分隔符将字符串分为两部分，我们要的id是后一个元素；
        if(!document.getElementById(sectionId)) continue;               //如果不存在带有相应id的元素，则进行下一个循环；
        document.getElementById(sectionId).style.display = "none";      //默认隐藏所有部分；
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

function showPic(whichpic)
{
    if(!document.getElementById) return false;
    if(!document.getElementById("placeholder")) return false;
    
    var placeholder = document.getElementById("placeholder");
    var src = whichpic.getAttribute("href");
    placeholder.setAttribute("src", src);
    
    if(document.getElementById("description"))
    {
        var description = document.getElementById("description");
        var pictitle = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        if(description.firstChild.nodeType == 3)
        {
            description.firstChild.nodeValue = pictitle;
        }
    }
    return true;
}

function preparePlaceholder()
{
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.gif");
    placeholder.setAttribute("alt", "my image gallery");

    var description = document.createElement("p");
    description.setAttribute("id", "description");

    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);

    var gallery = document.getElementById("imagegallery");

    insertAfter(description, gallery);
    insertAfter(placeholder, description);
}

function prepareGallery()
{
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++)
    {
        links[i].onclick = function()
        {
            return !showPic(this);
        }
    }
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);

function stripeTables()
{
    if(!document.getElementsByTagName) return false;
    
    var tables = document.getElementsByTagName("table");
    for(var i = 0; i < tables.length; i++)
    {
        var rows = tables[i].getElementsByTagName("tr");
        var odd = false;
        for(var j = 0; j < rows.length; j++)
        {
            if(odd == true)
            {
                addClass(rows[j], "odd");
                odd = false;
            }
            else
            {
                odd = true;
            }
        }
    }
}
addLoadEvent(stripeTables);

function highlightRows()
{
    var rows = document.getElementsByTagName("tr");
    for(var i = 0; i < rows.length; i++)
    {
        rows[i].oldClassName = rows[i].className;       //添加属性

        rows[i].onmouseover = function()
        {
            addClass(this, "highlight");
        }
        rows[i].onmouseout = function()
        {
            this.className = this.oldClassName;
        }
    }
}
addLoadEvent(highlightRows);

function displayAbbreviations()
{
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length < 1) return false;

    var defs = new Array();

    for(var i = 0; i < abbreviations.length; i++)
    {
        var abbreviation = abbreviations[i];
        if(abbreviation.length < 1) continue;

        var title = abbreviation.getAttribute("title");
        var key = abbreviation.lastChild.nodeValue;
        defs[key] = title;
    }

    var dlist = document.createElement("dl");

    for(key in defs)
    {
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);

        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(defs[key]);
        ddesc.appendChild(ddesc_text);

        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    if(dlist.childNodes.length < 1) return false;

    var header = document.createElement("h3");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);

    var articles = document.getElementsByTagName("article");
    articles[0].appendChild(header);
    articles[0].appendChild(dlist);
}
addLoadEvent(displayAbbreviations);

function isFilled(field)
{
    if(field.value.replace(" ", "").length == 0)        //如果将所有的空格字符去掉后字符串长度为0，那么表示没有填
    {
        return false;
    }
    
    var placeholder = field.getAttribute(field);
    return (field.value != placeholder);                //如果所填字段和placeholder完全相同，返回false；否则返回true；
}

function isEmail(field)
{
    return(field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
}

function validateForm(whichform)
{
    for(var i = 0; i < whichform.elements.length; i++)
    {
        var element = whichform.elements[i];
        if(element.required == "required")
        {
            if(!isFilled(element))
            {
                alert("Please fill in the " + element.name + " field.");
                return false;
            }
        }

        if(element.type == "email")
        {
            if(!isEmail(element))
            {
                alert("The " + element.name + " field must be a valid email address");
                return false;
            }
        }
    }
    return true;
}

function prepareForms()
{
    for(var i = 0; i < document.forms.length; i++)
    {
        var form = document.forms[i];
        form.onsubmit = function()                  //提交时执行函数
        {
            return validateForm(this);
        }
    }
}
addLoadEvent(prepareForms);


function getHTTPObject()//getHTTPObject通过对象检测技术检测了XMLHttpRequest
{
    if(typeof XMLHttpRequest == "undefined")//如果失败
        XMLHttpRequest = function()//继续检测其他的方法
        {
            try{ return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
                catch (e) {}
            try{ return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
                catch (e) {}
            try{ return new ActiveXObject("Msxml2.XMLHTTP");}
                catch (e) {}
            return false;
        }
    return new XMLHttpRequest();//最终返回false值或者一个新的XMLHttpRequest对象
}

function displayAjaxLoading(element)
{
    while(element.hasChildNodes())
    {
        element.removeChild(element.lastChild);
    }

    var content = document.createElement("img");
    content.setAttribute("src", "images/loading.gif");
    content.setAttribute("alt", "Loading...");
    element.appendChild(content);
}