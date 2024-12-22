import { removeContent } from "./removeContent";

function home(container) {
    removeContent(container);

    const logo = document.createElement("div");
    const title = document.createElement("h1");
    const description = document.createElement("p");
    const hours = document.createElement("div");
    const hoursTitle = document.createElement("h2");
    const hoursList = document.createElement("ul");
    const hoursSunday = document.createElement("li");
    const hoursMonday = document.createElement("li");
    const hoursTuesday = document.createElement("li");
    const hoursWednesday = document.createElement("li");
    const hoursThursday = document.createElement("li");
    const hoursFriday = document.createElement("li");
    const hoursSaturday = document.createElement("li");
    const location = document.createElement("div");
    const locationTitle = document.createElement("h2");
    const locationAddress = document.createElement("p");
    const locationLandmark = document.createElement("p");
    
    logo.classList.add("logo");
    title.textContent = "Grey Slush";
    title.classList.add("title");
    description.textContent = "We make food";
    description.classList.add("description");
    hours.classList.add("hours");
    hoursTitle.textContent = "Hours";
    hoursSunday.textContent = "Sunday: 0am - 6pm";
    hoursMonday.textContent = "Monday: 10pm - 6am";
    hoursTuesday.textContent = "Tuesday: 10pm - 6am";
    hoursWednesday.textContent = "Wednesday: 10pm - 6am";
    hoursThursday.textContent = "Thursday: 10pm - 6am";
    hoursFriday.textContent = "Friday: 10pm - 6am";
    hoursSaturday.textContent = "Saturday: 0am - 6am";
    location.classList.add("location");
    locationTitle.textContent = "Location";
    locationAddress.textContent = "987 St. Highway, HighwayState, HighwayCity";
    locationAddress.classList.add("address");
    locationLandmark.textContent = "Below highway";
    locationLandmark.classList.add("landmark");

    
    logo.appendChild(title);
    logo.appendChild(description);
    container.appendChild(logo);
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
    location.appendChild(locationLandmark);
    container.appendChild(location);
}

export {home}