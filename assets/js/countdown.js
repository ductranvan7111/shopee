function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;
    const intervalId = setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.querySelector('#hours').textContent = hours;
        display.querySelector('#minutes').textContent = minutes;
        display.querySelector('#seconds').textContent = seconds;

        if (--timer < 0) {
            document.querySelector('.flash-sale').style.display = 'none';
            clearInterval(intervalId);
        }
    }, 1000);
}

window.onload = function () {
    const countdownDuration = 1 * 3600;
    const display = document.querySelector('.flash-sale__countdown');
    startCountdown(countdownDuration, display);
};
