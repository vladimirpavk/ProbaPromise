'use strict'
let countPromises = 0;

function button1_Click(){
   console.log('Dugme pritisnuto');

   var p1=new Promise(
       function(resolve, reject){

            window.setInterval(function(){
                document.getElementById("label1").innerHTML=Math.random();
            }, 3000);
    });




}