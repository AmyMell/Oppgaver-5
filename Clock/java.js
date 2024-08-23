
var outputDiv = document.getElementById("output");
var numToShow = 0;

function setnum(selectedNum) {
  numToShow = selectedNum;
  outputDiv.innerHTML = numToShow;
}

function setnum(selectedNum) {
  numToShow = selectedNum;
  outputDiv.innerHTML = numToShow;
}

function add1() {
  var add1 = 1;
  numToShow += add1
  outputDiv.innerHTML = numToShow;
}
function add7() {
  var add7 = 7;
  numToShow += add7
  outputDiv.innerHTML = numToShow;
}
function minus1() {
  var minus1 = 1;
  numToShow -= minus1
  outputDiv.innerHTML = numToShow;
}
function minus7() {
  var minus7 = 7;
  numToShow -= minus7
  outputDiv.innerHTML = numToShow;
}

const app = document.getElementById('time');
        const roundTime = document.getElementById('lastRound');
        let seconds = 0;
        var timer;


        
        function timestart(){
          setInterval(countSeconds, 1000);
        }

        function countSeconds(){
            app.innerHTML = seconds;
            seconds++;
        }

        function pauseTimer(){ 
            roundTime.innerHTML += `<li>${seconds-1} sekunder</li>`;
            clearInterval(timer);
            seconds = 0;
        }

        function stopAll(){
            location.reload()
        }