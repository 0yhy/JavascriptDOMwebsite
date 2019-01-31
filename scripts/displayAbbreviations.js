// Programmed by LucyShawYang
// Created on 2019.1.29
// Last Modified on 2019.1.29

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
        var ddesc_text = document.createElement(defs[key]);
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