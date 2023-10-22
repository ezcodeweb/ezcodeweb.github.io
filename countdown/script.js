const days = document.querySelector('#days'),
      hours = document.querySelector('#hours'),
      minutes = document.querySelector('#minutes'),
      seconds = document.querySelector('#seconds');


let currentYear = new Date().getFullYear();
let newYearTime = new Date(`January 22 ${currentYear} 00:00:00`);


function updateDate() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime + 1;

  const d = Math.floor(diff / 1000 / 60  / 60  / 24);
  const h = Math.floor(diff / 1000 / 60  / 60 ) % 24;
  const m = Math.floor(diff / 1000 / 60 ) % 60;
  const s = Math.floor(diff / 1000 ) % 60;

  days.innerHTML = d<10? '0'+d : d;
  hours.innerHTML =  h<10? '0'+h : h;
  minutes.innerHTML =  m<10? '0'+m : m;
  seconds.innerHTML = s<10? '0'+s : s;

  if (d <= 0 && h <= 0 && m <= 0 && s === 12) {
    clearInterval(updateDate);
    var audio = new Audio('count.mp3');
    audio.play();
  }
  if (d <= 0 && h <= 0 && m <= 0 && s <= 0){
    window.location.replace("https://game.thomwebsite.com/countdown/happy%20new%20year/");
  } else {
    console.log(d , h , m , s); 
  }
}
  
setInterval(updateDate, 1000);