// Programmed by LucyShawYang
// Created on 2019.1.28
// Last Modified on 2019.1.28

function prepareSlideshow()
{
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

    var links = intro.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++)
    {
        links[i].onmousemove = function()
        {
            var destination = this.getAttribute("href");

            if(destination.indexOf("index.html") != -1)
            {
                moveElement("preview", 0, 0, 5);
            }
            if(destination.indexOf("about.html") != -1)
            {
                moveELement("preview", -150, 0, 5);
            }
            if(destination.indexOf("photos.html") != -1)
            {
                moveELement("preview", -300, 0, 5);
            }
            if(destination.indexOf("live.html") != -1)
            {
                moveELement("preview", -450, 0, 5);
            }
            if(destination.indexOf("contact.html") != -1)
            {
                moveELement("preview", -600, 0, 5);
            }
        }
    }
}

addLoadEvent(prepareSlideshow);