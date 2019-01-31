// Programmed by LucyShawYang
// Created on 2019.1.29
// Last Modified on 2019.1.29

function isFilled(field)
{
    if(field.value.replace(" ", "").length == 0)        //如果将所有的空格字符去掉后字符串长度为0，那么表示没有填
    {
        return false;
    }
    
    var placeholder = field.getAttribute(field);
    return (field.value != placeholder);                //如果所填字段和placeholder完全相同，返回false；否则返回true；
}

function isEmail(field)
{
    return(field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
}