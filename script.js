/*jshint esversion: 6 */


const  startingMinutes = 60;
let time = startingMinutes * 60;


const  countdownEL = document.getElementById('countdown');

setInterval(updateCountdown, 1000);
function  updateCountdown(){
 const minutes = Math.floor(time / 60);

 let seconds = time % 60;

 var tim =  countdownEL.innerHTML =`${minutes} m ${seconds}s`;
  document.title= tim;
seconds = seconds < 10 ? "0" + seconds : seconds;
 countdownEL.innerHTML =`${minutes}m ${seconds}s `;
  time--;
}
