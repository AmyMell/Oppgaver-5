let firstNum = 0;
let secondNum = 0;
var outputDiv = document.getElementById("score");
var score = 0;

function reset() {
  updateNumbers();
}

function updateNumbers() {
  firstNum = getRandomNumber();
  secondNum = getRandomNumber();
  document.getElementById("firstNum").innerHTML = firstNum;
  document.getElementById("secondNum").innerHTML = secondNum;
}

function getRandomNumber() {
  return Math.round(Math.random() * 10);
}

function right() {
  if (firstNum < secondNum) {
    var add1 = 1;
    score += add1;
    outputDiv.innerHTML = score;
    updateNumbers();
  } else {
    var minus1 = 1;
    score -= minus1
    document.getElementById("score").innerHTML = score;
  }
}
function left() {
  if (firstNum > secondNum) {
    var add1 = 1;
    score += add1;
    outputDiv.innerHTML = score;
    updateNumbers();
  } else {
    var minus1 = 1;
    score -= minus1
    document.getElementById("score").innerHTML = score;
  }
}
function even() {
  if (firstNum === secondNum) {
    var add1 = 1;
    score += add1;
    outputDiv.innerHTML = score;
    updateNumbers();
  } else {
    var minus1 = 1;
    score -= minus1
    document.getElementById("score").innerHTML = score;
  }
}


function sadtime(){
  var minus1 = 1;
  happytime -= minus1
}
function play(){
  if(happytime == 4){
  } else{
 var pluss1 = 1;
 happytime += pluss1}
}