//For creating a bubble
var score = 0;
var hitrn = 0;
function increaseScore() {
  score += 10;
  document.querySelector(".score").textContent = score;
}
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector(".hit").textContent = hitrn;
}
function makeBubble() {
  var double = "";
  for (var i = 1; i <= 119; i++) {
    var rn = Math.floor(Math.random() * 10);
    double += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#real-game").innerHTML = double;
}
var timer = 60;
function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".timervalue").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#real-game").innerHTML = "`<h1>Game Over</h1>`";
    }
  }, 1000);
}

document.querySelector("#real-game").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum == hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});
getNewHit();
runTimer();
makeBubble();
