const countdown = document.querySelector('.countdown');

//Launch date (ms)
const launchDate = new Date('Jul 1, 2021 21:15:00').getTime();

//Update every second
const intvl = setInterval(() => {
// Get todays date and time (ms)
const now = new Date().getTime();

//Distance from now to the launch date
const distance = launchDate - now;

//Time calculations
const seconds = Math.floor((distance % (1000 * 60)) / 1000);
const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const days = Math.floor(distance / (1000 * 60 * 60 * 24));

//Display result
countdown.innerHTML = `
<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Minutes</span></div>
<div>${seconds}<span>Seconds</span></div>




`;

//If launch date passed
if(distance < 0) {
    //stop countdown
    clearInterval(intvl);
    //style and text output
    countdown.getElementsByClassName.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
}
}, 1000);