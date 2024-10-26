// JavaScript Document
console.log("hi");

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector('button');
    menuButton.addEventListener('click', toggleMenu);
});

/* https://chatgpt.com/share/671cf85d-511c-800e-a3b3-b853443f139e */

function toggleMenu() {
    const header = document.querySelector('header');
    header.classList.toggle('nav-open');
}