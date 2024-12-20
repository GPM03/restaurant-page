import { removeContent } from "./removeContent";

function home(container) {
    removeContent(container);

    const title = document.createElement("h1");
    const description = document.createElement("p");
    const hours = document.createElement("section");
    const hoursTitle = document.createElement("h2");
    const hoursList = document.createElement("ul");
    const hoursSunday = document.createElement("li");
    const hoursMonday = document.createElement("li");
    const hoursTuesday = document.createElement("li");
    const hoursWednesday = document.createElement("li");
    const hoursThursday = document.createElement("li");
    const hoursFriday = document.createElement("li");
    const hoursSaturday = document.createElement("li");
    const location = document.createElement("section");
    const locationTitle = document.createElement("h2");
    const locationAddress = document.createElement("p");
    const locationDescription = document.createElement("p");
    
    title.textContent = "Grey Slush";
    description.textContent = "We make food";
    hoursTitle.textContent = "Hours";
    hoursSunday.textContent = "Sunday: 0am - 6pm";
    hoursMonday.textContent = "Monday: 10pm - 6am";
    hoursTuesday.textContent = "Tuesday: 10pm - 6am";
    hoursWednesday.textContent = "Wednesday: 10pm - 6am";
    hoursThursday.textContent = "Thursday: 10pm - 6am";
    hoursFriday.textContent = "Friday: 10pm - 6am";
    hoursSaturday.textContent = "Saturday: 0am - 6am";
    locationTitle.textContent = "Location";
    locationAddress.textContent = "987 St. Highway, HighwayState, HighwayCity";
    locationDescription.textContent = "Below highway";

    container.appendChild(title);
    container.appendChild(description);
    hoursList.appendChild(hoursSunday);
    hoursList.appendChild(hoursMonday);
    hoursList.appendChild(hoursTuesday);
    hoursList.appendChild(hoursWednesday);
    hoursList.appendChild(hoursThursday);
    hoursList.appendChild(hoursFriday);
    hoursList.appendChild(hoursSaturday);
    hours.appendChild(hoursTitle);
    hours.appendChild(hoursList);
    container.appendChild(hours);
    location.appendChild(locationTitle);
    location.appendChild(locationAddress);
    location.appendChild(locationDescription);
    container.appendChild(location);
}

export {home}