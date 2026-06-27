const countdown = document.getElementById("countdown");

let deadline = new Date();
deadline.setDate(deadline.getDate()+2);

function updateCountdown(){
let now = new Date().getTime();
let distance = deadline - now;

let days = Math.floor(distance/(1000*60*60*24));
let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance%(1000*60*60))/(1000*60));

countdown.innerHTML = `${days}D ${hours}H ${minutes}M Left`;
}

setInterval(updateCountdown,1000);
updateCountdown();