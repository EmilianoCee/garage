const bulb = document.getElementById("bulb");
const lightArea = document.getElementById("glow");
const garageLight = document.getElementById("garage-light");
const arrow = document.getElementById("arrow");
const toppy = document.getElementById("tippy");

console.log(toppy.style);

function glowHover() {
    lightArea.style.backgroundColor = "#feffb750";
    bulb.style.boxShadow = "#feffb7 0 0 50px 15px";
};

function glowOff() {
    lightArea.style.backgroundColor = "#00000000";
    bulb.style.boxShadow = "none";
};

function lightOn() {
    lightArea.style.backgroundColor = "#feffb725";
    bulb.style.boxShadow = "#feffb728 0 0 150px 115px";
    bulb.style.opacity = 1;
    garageLight.style.backgroundColor = "#00000000";
    arrow.style.display = "block";
}