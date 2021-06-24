'use strict'

var date = document.getElementById("date");
var datee= new Date();
var Datee=datee.getDate()+"/"+datee.getMonth()+"/"+datee.getFullYear();
var Hours = datee.getHours()+':'+datee.getMinutes()+':'+datee.getSeconds();
date.innerHTML=Datee;
function check()
{
    var task=document.getElementById("task").value;
    if(task.length!=0)
    {
        var div = document.getElementById("list");
        div.insertAdjacentHTML('beforeend','<p>'+task+'</p>');
        div.insertAdjacentHTML('beforeend','<span class=hours>'+Datee+' '+Hours+'</span>')
       
    }
    else
    {
        alert("Veuillez remplir le champs");
    }    
}

