// Programmed by LucyShawYang
// Created on 2019.1.29
// Last Modified on 2019.1.29

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