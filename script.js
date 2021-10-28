let secn = document.getElementById('secn');
let min = document.getElementById('min');
let hourS = document.getElementById('hour');
const circle = document.querySelector(".progress-circle");
let circleMnut = document.querySelector(".progress-circleMnut");
const circleHr = document.querySelector(".progress-circleHr");
let centrDiv = document.getElementById("innerbar");


let hour = 0;
let minutes = 0;
let seconds = 0;


// RUN THE STOPWATCH
function runTimer() {
  seconds += 1;
  setnTimer = setTimeout(runTimer, 1000)
  secn.innerHTML = seconds < 10 ? "0" + seconds : seconds;


  // HOURS circle PROGRESS
  const loadingHr = document.querySelector(".loadingHr");
  let circumferenceHr = circleHr.getTotalLength();
  let dataHr = hour * 3.15 - circumferenceHr;

  if (dataHr >= circumferenceHr) {
    clearInterval(setnTimer);
    reset()
  } else {
    dataHr += 1;
    circleHr.style.strokeDashoffset = dataHr;
    loadingHr.innerHTML = hour;
    loadingHr.style.fontSize = 30;

  }


  // MINUTES circle PROGRESS
  let loadingMnut = document.querySelector(".loadingMnut");
  let circumferenceMnut = circleMnut.getTotalLength();
  let dataMnut = minutes * 3.15 - circumferenceMnut;

  if (dataMnut >= circumferenceMnut) {
    clearInterval(setnTimer);
    reset()
  } else {
    dataMnut += 1;
    circleMnut.style.strokeDashoffset = dataMnut;
    loadingMnut.innerHTML = minutes;
    loadingMnut.style.fontSize = 30;

  }



  // SECONDS circle PROGRESS
  const loading = document.querySelector(".loading");
  let circumference = circle.getTotalLength();
  let data = seconds * 3.15 - circumference;

  if (data >= circumference) {
    clearInterval(setnTimer);
    reset()
  } else {
    data += 1;
    circle.style.strokeDashoffset = data;
    loading.innerHTML = seconds;
    loading.style.fontSize = 30;
  }



  // LINE PROGRESS BAR SECONDS
  let tex = document.getElementById("text");
  let width = seconds * 1.655;
  if (width >= 100) {
    clearInterval(setnTimer)
  } else {
    width += 1;
    centrDiv.style.width = width + "%";
    // tex.innerHTML = seconds <10 ? "0"+ seconds:seconds;
  }



  // CALCULATING STOP-WATCH
  if (seconds === 60) {
    minutes += 1;
    seconds = 0;
    min.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  } else if (minutes === 12) {
    hour += 1;
    minutes = 0;
    seconds = 0
    min.innerHTML = "0"
    hourS.innerHTML = hour < 10 ? "0" + hour : hour;

  }


}


// RESET STOP-WATCH
function reset() {
  hour = 0;
  minutes = 0;
  seconds = 0;
  min.innerHTML = "00:";
  hourS.innerHTML = "00:";
  secn.innerHTML = "00";
  circle.style.strokeDashoffset = 189;
  circleMnut.style.strokeDashoffset = 189;
  circleHr.style.strokeDashoffset = 189;
  centrDiv.style.width = 1 + "%";


}
