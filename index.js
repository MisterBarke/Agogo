let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timeRef = document.querySelector(".timer");
let int = null;
let span = document.querySelector('#span')
const secs = document.getElementById('secs');






let date = new Date();



function displayTimer (){
   
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds=0;
        seconds--;
        if(seconds == -1){
           minutes--;
           seconds = 59;
        }
        if(minutes>=60){
            hours = parseInt(minutes / 60);
            minutes = minutes % 60;
        }
        if((minutes == 0) && (seconds ==0) && (hours == 0)){
           timeRef.setAttribute("style", "display: none");
           span.setAttribute('style', 'display: flex');
            clearInterval(int); 
        }

    }
 
    
let m = minutes <10? '0' + minutes : minutes
let h = hours <10? '0' + hours : hours
let s = seconds <10? '0' + seconds : seconds
/* let ms = milliseconds > 10? '' + milliseconds : milliseconds < 100 ? "0" + milliseconds: milliseconds; */

timeRef.innerHTML = `${h}:${m}:${s}`;



}


secs.addEventListener("click", ()=>{
    clearInterval(int);
    if(int!==null){
        clearInterval(int);
        
    }
    int = setInterval(displayTimer, +10);
    date.setHours(date.getHours()+hours)
date.setMinutes(date.getMinutes())
 date.setSeconds(date.getSeconds()+19)
let message = document.getElementById('message');
message.innerHTML = ` Get back at ${date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`
   
seconds = 19;


})
///////////Cappucino/////////////
const cappucino = document.getElementById('cappucino');

cappucino.addEventListener("click", ()=>{
    
    clearInterval(int);
    if(int!==null){
        clearInterval(int);
       
    }
    int = setInterval(displayTimer, +10)
   
seconds = 59;
minutes = 04;
date.setHours(date.getHours()+hours)
date.setMinutes(date.getMinutes()+04)
 date.setSeconds(date.getSeconds()+59)
let message = document.getElementById('message');
message.innerHTML = ` Get back at ${date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`

})

///////////The/////////

const THE = document.getElementById('THE');

THE.addEventListener("click", ()=>{
    
    clearInterval(int);
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, +10)
   
seconds = 59;
minutes = 14;
date.setHours(date.getHours()+hours)
date.setMinutes(date.getMinutes()+14)
 date.setSeconds(date.getSeconds()+59)
let message = document.getElementById('message');
message.innerHTML = ` Get back at ${date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`
})

///////////breackFast/////////

const breakFast = document.getElementById('breakFast');

breakFast.addEventListener("click", ()=>{
    
    clearInterval(int);
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, +10)
seconds = 59;
minutes = 19;
date.setHours(date.getHours()+hours)
date.setMinutes(date.getMinutes()+19)
 date.setSeconds(date.getSeconds()+59)
let message = document.getElementById('message');
message.innerHTML = ` Get back at ${date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`
})

///////////lunch/////////

const lunch = document.getElementById('lunch');

lunch.addEventListener("click", ()=>{
    
    clearInterval(int);
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, +10)
   
seconds = 59;
minutes = 29;
date.setHours(date.getHours()+hours)
date.setMinutes(date.getMinutes()+29)
 date.setSeconds(date.getSeconds()+59)
let message = document.getElementById('message');
message.innerHTML = ` Get back at ${date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`
})


 let form = document.getElementById("form")
let setTime = document.getElementById("setTime");


    form.addEventListener("submit", e=>{
      
        e.preventDefault();
         clearInterval(int)
      
         if(int!==null){
             clearInterval(int);
         }
         
         int = setInterval(displayTimer, +10);
        if(setTime.value>0){
            minutes = parseInt(setTime.value-1);// insere la valeur de l'input à "minute" 
         seconds = 59;
         
        // toujours debuter avec 59secs
        }else{
         clearInterval(int);
         timeRef.innerHTML = `00:00:00`
        }
       
    date.setHours(date.getHours()+hours)
    date.setMinutes(date.getMinutes()+minutes)
     date.setSeconds(date.getSeconds())
    let message = document.getElementById('message');
    message.innerHTML = ` Get back at ${date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}` 
})
   

    
