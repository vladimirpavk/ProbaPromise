'use strict'
let countPromises = 0;

function button1_Click(){
   console.log('Dugme pritisnuto');

   for(var x=0; x<50; x++){
       let promise=new Promise(function(resolve, reject){
           resolve(Math.random());
       }).then(promiseResolved);
   }

   /*var p1=new Promise(
       function(resolve, reject){

            window.setInterval(function(){
                document.getElementById("label1").innerHTML=Math.random();
            }, 3000);
    });*/
}

function promiseResolved(val){  
    console.log(val);
}