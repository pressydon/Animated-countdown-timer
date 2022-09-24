const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');


let hourInput = hour.value;
const minutesInput = minutes.value;
const secondsInput = seconds.value;

let startTimer = null;

function timer(){
 if(hour.value <= 0 && minutes.value<=0 && seconds.value <= 0){
    hour.value = 0;
    minutes.value = 0;
    seconds.value = 0;
 } else if(seconds.value != 0 ){
     seconds.value--;
 }
 else if( minutes.value != 0 && seconds.value == 0 ){
    
     seconds.value = 59;
     minutes.value--;
 } else if(hour.value != 0 && minutes.value == 0 && seconds.value == 0){
    
     minutes.value = 60;
     hour.value--;
 };
 return
};

function stopTimer(){
 clearInterval(startTimer);
};

startButton.addEventListener('click',function(){
    function startInterval(){
        startTimer = setInterval(function(){
            timer()
        },1000);
    }
    startInterval();
});


resetButton.addEventListener('click',function(){
    hour.value = 0;
    minutes.value = 0;
    seconds.value = 0;
 stopTimer()
})



