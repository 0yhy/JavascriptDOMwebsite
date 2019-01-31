// Programmed by LucyShawYang
// Created on 2019.1.29
// Last Modified on 2019.1.29

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