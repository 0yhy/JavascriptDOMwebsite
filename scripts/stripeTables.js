// Programmed by LucyShawYang
// Created on 2019.1.29
// Last Modified on 2019.1.29

function stripeTables()
{
    if(!document.getElementsByTagName) return false;
    
    var tables = document.getElementsByTagName("table");
    for(var i = 0; i < tables.length; i++)
    {
        var rows = table[i].getElementsByTagName("tr");
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