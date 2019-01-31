// Programmed by LucyShawYang
// Created on 2019.1.29
// Last Modified on 2019.1.29

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