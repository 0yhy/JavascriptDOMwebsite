// Programmed by LucyShawYang
// Created on 2019.1.28
// Last Modified on 2019.1.28

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