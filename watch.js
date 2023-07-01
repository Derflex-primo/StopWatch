let [seconds, minutes, hours] = [0,0,0];
let timeDisplay = document.querySelector("#timeDisplay");
let timer = null;




function stopWatch(){
    seconds++
    if(seconds == 60){
        seconds = 0;
        seconds++;
        if(minutes == 60){
           minutes = 0;
           hours++
        }
    }
    let hrs = hours < 10 ? "0" + hours : hours;
    let mins  = minutes < 10 ? "0" + minutes : minutes;
    let secs = seconds < 10 ? "0" + seconds : seconds;

    timeDisplay.innerHTML = `${hrs}:${mins}:${secs}`;
 
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer)
    }
   timer =  setInterval(stopWatch, 1000)
}

function watchPause(){
    clearInterval(timer) 
}

function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    timeDisplay.innerHTML = "00:00:00";
}
 

 


 

