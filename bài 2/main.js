    var minutesInput = document.getElementsByClassName("box-minute");
    var secondsInput = document.getElementsByClassName("box-second");
    var startButton = document.getElementsByClassName("footer-start");
    var resetButton = document.getElementsByClassName("footer-reset");
    const alarm = document.getElementById('alarm');

    let countdown;

    startButton.addEventListener('click', function () {
        const minutes = parseInt(minutesInput.value);
        const seconds = parseInt(secondsInput.value);
        const totalTime = minutes*60 + seconds;

        if (isNaN(totalTime) || totalTime <= 0) {
            alert('Vui lòng nhập thời gian hợp lệ!');
            return;
        }

        startCountdown(totalTime);

    });

    resetButton.addEventListener('click', function () {
        clearInterval(countdown);
        minutesInput = '';
        secondsInput = '';

        
    });

    function startCountdown(totalTime) { 
        let remainingTime = totalTime;
        countdown = setInterval(function () { 
            const phut = Math.floor(remainingTime/60);
            const giay = remainingTime % 60 ;

            if (phut === 0 && giay === 0) {
                clearInterval(countdown);
                alarm.play();
                setTimeout(function () {
                  alert('Hết giờ!');
                }, 1000);
            }
            remainingTime--
        },1000)
    }
