let counter=document.querySelector(".counter");
let a=null;

let seconds=0;
let minutes=0;
let hours=0;

let start=document.querySelector("#strtbtn");
let stop=document.querySelector("#stopbtn");
let reset=document.querySelector("#resetbtn");

start.addEventListener("click",startTime);
function startTime(){
    a=setInterval(startclock,1000);
    start.removeEventListener("click",startTime);
}

function stopTime(){
    clearInterval(a);
    start.addEventListener("click",startTime);
}
function resetTime(){
    clearInterval(a);
     seconds=0;
     minutes=0;
     hours=0;
     counter.innerHTML="0"+hours+" : "+"0"+minutes+" : "+"0"+seconds;
     start.addEventListener("click",startTime);
}

function startclock(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    if(hours<10 && minutes<10 && seconds<10){
        counter.innerHTML="0"+hours+" : "+"0"+minutes+" : "+"0"+seconds;
    }
    else if(hours<10 && minutes<10){
        counter.innerHTML="0"+hours+" : "+"0"+minutes+" : "+seconds;
    }
    else if(hours<10){
        counter.innerHTML="0"+hours+" : "+minutes+" : "+seconds;
    }
    else{
        counter.innerHTML=hours+" : "+minutes+" : "+seconds;
    }
   

}