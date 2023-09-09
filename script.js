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

// grocery list
const groceries = document.getElementsByClassName('groceries')[0];
const pencil = document.getElementById('pencil');
const allItems = document.getElementById('allItems');
const listUserInput = document.getElementById('listUserInput');

pencil.addEventListener('click', function(){
    allItems.innerHTML = '';
})

listUserInput.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        addItem();
    }
})

function addItem(){
    let h2 = document.createElement('h2');
    h2.innerHTML = '- ' + listUserInput.value;

    h2.addEventListener('click', function(){
        h2.style.textDecoration = 'line-through';
    })

    allItems.insertAdjacentElement('beforeend', h2);

    listUserInput.value = '';
}