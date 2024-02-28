'use strict';

const sliderImages = document.querySelectorAll(".slider img");

let index = 0;
function runSlider() {
    if(index >= sliderImages.length * 2) {
        index = 0;
    }

    sliderImages.forEach(image => image.style.right = index+"0%")
    index += 2;
}

setInterval(runSlider, 3000)