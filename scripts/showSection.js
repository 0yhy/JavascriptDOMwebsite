// Programmed by LucyShawYang
// Created on 2019.1.29
// Last Modified on 2019.1.29

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