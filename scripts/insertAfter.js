// Programmed by LucyShawYang
// Created on 2019.1.28
// Last Modified on 2019.1.28

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