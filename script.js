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
    }

    for (j=0 ; j<dots.length;j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }

    if(index > images.length - 1) {
        index = 0;
    }

    if(index < 0){
        index = images.length -1;
    }

    images[index].style.display = "block";
    dots[index].className += " active";
}