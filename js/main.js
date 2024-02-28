'use strict';
document.querySelectorAll(".menu__dropdown > a").forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault();
    });
});

toggle(document.querySelector(".menu__dropdown"), document.querySelector(".menu__dropdown__submenu"), "display--menu");
toggle(document.getElementById("navbar_toggle"), document.getElementById("navbar_menu"), "display--menu");

function toggle(element1 = {}, element2 = {}, elementClassName = "") {
    element1.addEventListener("click", ()=> {
        element2.classList.toggle(elementClassName);
    });
}

const body = document.body;

document.addEventListener('scroll', function() {
    const header =document.querySelector(".header");
    if(window.scrollY > 0) {
        header.style.position="fixed";
    }else {
        header.style.position = "relative";
    }
});