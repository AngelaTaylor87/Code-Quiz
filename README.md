# Code-Quiz
homework4
var mainEl = document.getElementById("main");

var timeEl = document.getElementById(".time")

var secondsLeft = 90;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "timer";

        if (secondsLeft === 0) {
            clearIvnterval(timerInterval);
            sendMessage("Times Up");
        }
    });
}
;