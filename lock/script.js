// config
let baseSpeed = 0.05;
let notchWidth = 0.25;

let colors = {
  green: {
    body: "hsl(168, 75%, 42%)",
    lock: "hsl(210, 61%, 18%)"
  },
  violet: {
    body: "hsl(87, 29%, 40%)",
    lock: "hsl(87, 47%, 11%)"
  },
  orange: {
    body: "hsl(24, 62%, 53%)",
    lock: "hsl(35, 20%, 12%)"
  },
  blue: {
    body: "hsl(186, 85%, 37%)",
    lock: "hsl(32, 67%, 8%)"
  },
  olive: {
    body: "hsl(55, 16%, 41%)",
    lock: "hsl(0, 0%, 0%)"
  }
};

let level = 1;
let count = 0;
let linePosition = 0;
let clockwise = true;
let notchPosition = 0;
let status = "start";

function setColor(color) {
  document.body.style.background = colors[color].body;
  document.getElementById("shackle").style.borderColor = colors[color].lock;
  document.getElementById("lock").style.borderColor = colors[color].lock;
}

function newNotch() {
  notchPosition = (((Math.random() * 0.75 * Math.PI) + 0.25 * Math.PI) * ((clockwise * 2) - 1)) + linePosition;
  document.getElementById("notch-dial").style.transform = "rotate(" + notchPosition + "rad)";
  document.getElementById("notch").style.display = "block";
  document.getElementById("notch").classList.toggle("appear-b");
}
function setStatus(newStatus) {
  status = newStatus;
  switch (newStatus) {
    case "start":
      if (level < 10) setColor("green");
      else if (level < 20) setColor("violet");
      else if (level < 30) setColor("orange");
      else if (level < 40) setColor("blue");
      else setColor("olive");
      setCount(level);
      linePosition = 0;
      clockwise = true;
      newNotch();
      document.body.classList.remove("fail");
      break;
    case "move":
      break;
    case "fail":
      document.getElementById("notch").style.display = "none";
      document.body.classList.add("fail");
      break;
    case "win":
      document.getElementById("notch").style.display = "none";
      document.body.classList.add("next");
      document.getElementById("shackle").classList.add("unlock");
      setTimeout(function() {
        setLevel(level + 1);
        setStatus("start");
        document.getElementById("shackle").classList.remove("unlock");
      }, 1000);
      setTimeout(function() {
        document.body.classList.remove("next");
      }, 2000);
      break;
  }
}

function setCount(newCount) {
  count = newCount;
  document.getElementById("lock").innerText = count;
}

function setLevel(newLevel) {
  level = newLevel;
  document.getElementById("level").innerText = level;
  window.localStorage.setItem("level", level);
}


function click() {
  switch (status) {
    case "start":
      setStatus("move");
      break;
    case "move":
      if (Math.abs(Math.atan2(Math.sin(linePosition - notchPosition), Math.cos(linePosition - notchPosition))) < notchWidth) {
        setCount(count - 1);
        if (count == 0) {
          setStatus("win");
        } else {
          clockwise = !clockwise;
          newNotch();
        }
      } else {
        setStatus("fail");
      }
      break;
    case "fail":
      setStatus("start");
      break;
    case "win":
      setStatus("start");
      break;
  }
}

function step() {
  if (status == "move") linePosition += baseSpeed * (clockwise * 2 - 1);
  document.getElementById("line-dial").style.transform = "rotate(" + linePosition + "rad)";
  if ((Math.atan2(Math.sin(linePosition - notchPosition), Math.cos(linePosition - notchPosition))) * (clockwise * 2 - 1) > notchWidth) setStatus("fail");
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
window.addEventListener("mousedown", click);
window.addEventListener("touchstart", function(event) {
  if (event.cancelable) {
    event.preventDefault();
  }
  click();
}, { passive: false });
window.addEventListener("keydown", click);

setLevel(parseInt(window.localStorage.getItem("level")) || 1);
setStatus("start");
