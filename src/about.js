import { removeContent } from "./removeContent";
import aboutBg from "./materials/chef.png";

function about(container) {
    removeContent(container);

    const img = document.createElement("img");
    const title = document.createElement("h1");
    const description = document.createElement("p");

    img.setAttribute("src", aboutBg);
    title.textContent = "We make food";
    description.textContent = "that's all you need to know.";

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);

}

export {about};