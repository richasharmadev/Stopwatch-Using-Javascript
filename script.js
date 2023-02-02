let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerWrap = document.querySelector('#timerWrap');
let start = document.querySelector('#start');
let pause = document.querySelector('#pause');
let reset = document.querySelector('#reset');
let int = null;

// Starting the counter on clicking the start button
start.addEventListener('click', ()=>{
   if(int!==null){
      clearInterval(int);
   }
   int = setInterval(displayTimer,10);
});

// Pausing the counter on clicking the pause button
pause.addEventListener('click', ()=>{
   clearInterval(int);
});

// Resetting the counter on clicking the reset button
reset.addEventListener('click', ()=>{
   clearInterval(int);
   [milliseconds,seconds,minutes,hours] = [0,0,0,0];
   timerWrap.innerHTML = '00 : 00 : 00 : 000 ';
});

// Displaying the counter
function displayTimer(){
   milliseconds+=10;
   if(milliseconds == 1000){
      milliseconds = 0;
      seconds++;
      if(seconds == 60){
         seconds = 0;
         minutes++;
         if(minutes == 60){
               minutes = 0;
               hours++;
         }
      }
   }

   let h = 0;
   if (hours < 10){
      h = "0" + hours
   } else {
      h = hours;
   }

   let m = 0;
   if (minutes < 10){
      m = "0" + minutes
   } else {
      m = minutes;
   }

   let s = 0;
   if (seconds < 10){
      s = "0" + seconds
   } else {
      s = seconds;
   }

   let ms = 0;
   if (milliseconds < 10){
      ms = "00" + milliseconds
   } else if (milliseconds < 100) {
      ms = "0" + milliseconds
   } else {
      ms = milliseconds
   }

   // Setting inner html of Timer Wrap div every 10 milliseconds
   timerWrap.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
