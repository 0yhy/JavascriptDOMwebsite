// Programmed by LucyShawYang
// Created on 2019.1.29
// Last Modified on 2019.1.29

function validateForm(whichform)
{
    for(var i = 0; i < whichform.elements.length; i++)
    {
        var element = whichform.elements[i];
        if(element.required == "required")
        {
            if(!isFilled(element))
            {
                alert("Please fill in the " + element.name + " field.");
                return false;
            }
        }

        if(element.type == "email")
        {
            if(!isEmail(element))
            {
                alert("The " + element.name + " field must be a valid email address");
            }
        }
    }
    return true;
}