import "./styles.css";  
import {home} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";

const container = document.querySelector(".content");
const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");

home(container);

homeButton.addEventListener("click", () => {
    home(container);
}) 

menuButton.addEventListener("click", () => {
    menu(container);
})

aboutButton.addEventListener("click", () => {
    about(container);
})