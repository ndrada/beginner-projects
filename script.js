// counter

let count = 0;
function changeCount(num){
    count += num;
    document.getElementById("count").innerHTML = count;
}

// carousel
let index = 0;

function showImage(i){
    index += i;

    const images = document.getElementsByClassName("image");

    const dots = document.getElementsByClassName("dot");

    for(j=0;j < images.length;j++){
        images[j].style.display="none";
        images[j].classList.remove("fade");
        dots[j].className = dots[j].className.replace(" active", "");
    }

    if(index > images.length - 1) {
        index = 0;
    }

    if(index < 0){
        index = images.length -1;
    }

    images[index].style.display = "block";
    images[index].classList.add("fade");
    dots[index].className += " active";
}

    document.addEventListener('DOMContentLoaded', () => {
        showImage(0);
    });
    window.addEventListener("onload", showImage(index));


 // digital clock

window.addEventListener('load', calculateTime);
function calculateTime(){
    let date = new Date();
    const dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >= 12? 'PM' : 'AM';
    const dayNames = ["SUN", 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById('day').innerHTML = dayNames[dayNumber];
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('ampm').innerHTML = ampm;

    setTimeout(calculateTime, 200);
}   

// calculator
const userInput = document.getElementById('calcUserInput');
let expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    userInput.value = eval(expression); 
    expression = '';
}

function erase(){
    expression = '';
    userInput.value = expression;
}