let timer;
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let alarmSound = document.getElementById('alarm');

function startTimer() {
    let minutes = parseInt(minutesInput.value);
    let seconds = parseInt(secondsInput.value);

    if (isNaN(minutes) || isNaN(seconds)) {
        alert("Vui lòng nhập số phút và giây hợp lệ.");
        return;
    }

    let totalTime = minutes * 60 + seconds;

    timer = setInterval(function() {
        totalTime--;

        if (totalTime < 0) {
            clearInterval(timer);
            alarmSound.play();
            return;
        }

        let displayMinutes = Math.floor(totalTime / 60);
        let displaySeconds = totalTime % 60;

        minutesInput.value = displayMinutes.toString().padStart(2, '0');
        secondsInput.value = displaySeconds.toString().padStart(2, '0');
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    minutesInput.value = '';
    secondsInput.value = '';
    alarmSound.pause();
    alarmSound.currentTime = 0;
}
