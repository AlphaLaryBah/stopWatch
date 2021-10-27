let secn = document.getElementById('secn');
let min = document.getElementById('min');
let hourS = document.getElementById('hour');

let hour = 0;
let minutes = 0;
let seconds = 0;



function runTimer() {
  let tex = document.getElementById("text");
  seconds += 1;
  setnTimer = setTimeout(runTimer, 1000)
  secn.innerHTML = seconds < 10 ? "0" + seconds : seconds;

  let centrDiv = document.getElementById("innerbar");

  let width = seconds * 1.666;
  if (width >= 100) {
    clearInterval(setnTimer);
    rest()

  } else {
    width += 1;
    centrDiv.style.width = width + "%";
    tex.innerHTML = seconds < 10 ? "0" + seconds : seconds;

  }


  // MINUTES circle PROGRESS
  let circleMnut = document.querySelector(".progress-circleMnut");
  let loadingMnut = document.querySelector(".loadingMnut");
  let circumferenceMnut = circleMnut.getTotalLength();
  let dataMnut = minutes * 3.15 - circumferenceMnut;

  console.log(dataMnut)

  if (dataMnut >= circumferenceMnut) {
    clearInterval(setnTimer);
    rest()

  } else {
    dataMnut += 1;
    circleMnut.style.strokeDashoffset = dataMnut;
    loadingMnut.innerHTML = minutes + "Min"
  }

  // SECONDS circle PROGRESS
  const circle = document.querySelector(".progress-circle");
  const loading = document.querySelector(".loading");
  let circumference = circle.getTotalLength();
  let data = seconds * 3.15 - circumference;
  if (data >= circumference) {
    clearInterval(setnTimer);
    rest()

  } else {
    data += 1;
    circle.style.strokeDashoffset = data;
    loading.innerHTML = seconds + "sec";
    // console.log("here")

  }



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

function reset() {
  hour += 1;
  minutes = 0;
  seconds = 0
  min.innerHTML = "00"
  hourS.innerHTML = "00";
  secn.innerHTML = "00";
  

}
