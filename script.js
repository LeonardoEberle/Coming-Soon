const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minEL = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");

const finaldate = "1 oct 2022";

function countdown(){

    const deadlineDate = new Date(finaldate);
    const currentDate = new Date();
    
    const totalSeconds = (deadlineDate - currentDate)/1000;
    
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;


    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minEL.innerHTML = formatTime(mins);
    secondsEL.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}`: time;
}

countdown();
setInterval(countdown, 1000);