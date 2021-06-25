'use strict'
var tache=[];
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
        tache.push(task);
        try {
            
            localStorage.setItem("tache", JSON.stringify(tache));
            

        } catch(e){
            alert("erreur");
        }
        try {
            
            let tachee =JSON.parse(localStorage.getItem("tache"));
            console.log(tachee.length);
            
            var div = document.getElementById("list"); 
            div.insertAdjacentHTML('beforeend','<p>'+tachee[tachee.length-1]+'</p>');
            div.insertAdjacentHTML('beforeend','<span class=hours>'+Datee+' '+Hours+'</span>')


        } catch(e){
            alert("erreur2");
        }
        
        // let arr = [1,2,3];
        // localStorage.setItem("key", JSON.stringify(arr));

        // let obj = JSON.parse(localStorage.getItem("key"));

        // console.log(obj[0]);
        
       
    }
    else
    {
        alert("Veuillez remplir le champs");
    }    
}

