import { removeContent } from "./removeContent";

function menu(container) {
    removeContent(container);

    const title = document.createElement("h1");
    const drinks = document.createElement("div");
    const drinkTitle = document.createElement("h2");
    const drinkItem = document.createElement("div");
    const drinkItemTitle = document.createElement("h3");
    const drinkItemDescription = document.createElement("p");
    const drinkItemPrice = document.createElement("p");
    const dishes = document.createElement("div");
    const dishTitle = document.createElement("h2");
    const dishItem = document.createElement("div");
    const dishItemTitle = document.createElement("h3");
    const dishItemDescription = document.createElement("p");
    const dishItemPrice = document.createElement("p");
    const combos = document.createElement("div");
    const comboTitle = document.createElement("h2");
    const comboItem = document.createElement("div");
    const comboItemTitle = document.createElement("h3");
    const comboItemDescription = document.createElement("p");
    const comboItemPrice = document.createElement("p");

    title.textContent = "Menu";
    title.classList.add("title");
    drinkTitle.textContent = "Drinks";
    drinkItemTitle.textContent = "Tap water, 250ml";
    drinkItemDescription.textContent = "Fresh water, straight from the tap";
    drinkItemPrice.textContent = "$1.50";
    dishTitle.textContent = "Dishes";
    dishItemTitle.textContent = "Gray, 1kg";
    dishItemDescription.textContent = "Gray";
    dishItemPrice.textContent = "$2.50";
    comboTitle.textContent = "Combos";
    comboItemTitle.textContent = "Gray, 1kg + tap water, 250ml";
    comboItemDescription.textContent = "Good combo";
    comboItemPrice.textContent = "$5.00";

    container.appendChild(title);
    drinks.appendChild(drinkTitle);
    drinks.classList.add("drinks");
    drinkItem.appendChild(drinkItemTitle);
    drinkItem.appendChild(drinkItemDescription);
    drinkItem.appendChild(drinkItemPrice);
    drinks.appendChild(drinkItem);
    drinkItem.classList.add("menu-item");
    container.appendChild(drinks);
    dishes.appendChild(dishTitle);
    dishes.classList.add("dishes");
    dishItem.appendChild(dishItemTitle);
    dishItem.appendChild(dishItemDescription);
    dishItem.appendChild(dishItemPrice);
    dishes.appendChild(dishItem);
    dishItem.classList.add("menu-item");
    container.appendChild(dishes);
    combos.appendChild(comboTitle);
    combos.classList.add("combos");
    comboItem.appendChild(comboItemTitle);
    comboItem.appendChild(comboItemDescription);
    comboItem.appendChild(comboItemPrice);
    combos.appendChild(comboItem);
    container.appendChild(combos);
    comboItem.classList.add("menu-item");
}

export {menu}