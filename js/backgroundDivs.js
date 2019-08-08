"use strict";

// creating html from here because, div's background colors have to be random
function initDivs() {
    let body = document.querySelector("body");

    for (let i = 0; i < 100; i++) {
        let div = document.createElement("div");
        div.classList.add("nav-bar");
        div.style.backgroundColor = genRandomColor();
        body.appendChild(div);
    }
}

function genRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

initDivs();