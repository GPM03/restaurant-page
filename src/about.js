import { removeContent } from "./removeContent";
import aboutBg from "./materials/chef.png";

function about(container) {
    removeContent(container);

    const about = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h1");
    const description = document.createElement("p");
    const imgCredit = document.createElement("p");

    container.classList.add("content--about");
    about.classList.add("about");
    img.setAttribute("src", aboutBg);
    title.textContent = "We make food";
    title.classList.add("title");
    title.classList.add("title--about");
    description.textContent = "That's all you need to know.";
    description.classList.add("about-text");
    imgCredit.textContent = "IA generated image by Canva";
    imgCredit.classList.add("img-credit");

    about.appendChild(img);
    about.appendChild(title);
    about.appendChild(description);
    about.appendChild(imgCredit);
    container.appendChild(about);
}

export {about};