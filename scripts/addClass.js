// Programmed by LucyShawYang
// Created on 2019.1.28
// Last Modified on 2019.1.28

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