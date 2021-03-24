const outputDaysRef = document.querySelector('span[data-value="days"]');
const outputHoursRef = document.querySelector('span[data-value="hours"]');
const outputMinsRef = document.querySelector('span[data-value="mins"]');
const outputSecsRef = document.querySelector('span[data-value="secs"]');


function timer () {
    const selector = '#timer-1';
    const targetDate = new Date('Jul 17, 2021');

    const intervalId = setInterval(()=> {
        const currentTime = new Date();
        const deltaTime = targetDate - currentTime;

        updateClockface(deltaTime);
    }, 1000)
}

timer();


function updateClockface(time) {
    
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    
    outputDaysRef.textContent = days;
    outputHoursRef.textContent = hours;
    outputMinsRef.textContent = mins;
    outputSecsRef.textContent = secs;
}

function pad(value) {
    return String(value).padStart(2, '0');
}