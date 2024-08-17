let timer;
let isRunning = false;
let sec = 0;
let min = 0;
let hours = 0;
let lapC = 1;

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.lap').addEventListener('click', lap);
document.querySelector('.clear-laps').addEventListener('click', clearLaps);

function startTimer() {
    if (!isRunning) {
        timer = setInterval(incrementTime, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    sec = 0;
    min = 0;
    hours = 0;
    lapC = 1;
    displayUpdate();
    document.querySelector('.laps').innerHTML = '';
}

function incrementTime() {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
        if (min === 60) {
            min = 0;
            hours++;
        }
    }
    displayUpdate();
}

function displayUpdate() {
    const display = document.querySelector('.main-display');
    display.textContent = `${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

function lap() {
    const lapT = document.querySelector('.main-display').textContent;
    const lapS = document.querySelector('.laps');
    const lapI = document.createElement('li');
    lapI.textContent = `Lap ${lapC}: ${lapT}`;
    lapS.appendChild(lapI);
    lapC++;
}

function clearLaps() {
    document.querySelector('.laps').innerHTML = '';
    lapC = 1;
}

