import "./styles/static.css";
import { homeUI } from "./modules/home.js";
import { menuUI } from "./modules/menu.js";
import { aboutUI } from "./modules/about.js";
let homeBtn = document.querySelectorAll('.home_btn');
let menuBtn = document.querySelectorAll('.menu_btn');
let aboutBtn = document.querySelectorAll('.about_btn');
let body = document.querySelector('body');
let main = document.querySelector('main');
let hamburger = document.querySelector('.hamburger');
let hamburgerNav = document.querySelector('.hamburger_nav');
document.addEventListener('DOMContentLoaded', homeUI);
hamburger.addEventListener('click', () => {
    hamburgerNav.classList.toggle('active');
})
hamburgerNav.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        hamburgerNav.classList.remove('active');
    })
})
  
homeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        main.classList.remove('menu_main', 'about_main');
        main.innerHTML = '';
        homeUI();
    });
})
menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        main.classList.remove('home_main', 'about_main');
        main.innerHTML = '';
        menuUI();
    });
})
aboutBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        main.classList.remove('home_main', 'menu_main');
        main.innerHTML = '';
        aboutUI();
    });
})

