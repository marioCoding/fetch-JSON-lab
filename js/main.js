document.addEventListener('DOMContentLoaded', initialize);

async function initialize() {
    let act = await fetch("https://www.boredapi.com/api/activity")
    let activity = await act.json();
    try {
        const activityElement = document.createElement("h3");
        activityElement.textContent = `${await activity.activity}`;
        const typeElement = document.createElement("p");
        typeElement.textContent = `${await activity.type}`;
        const participantElement = document.createElement("p");
        participantElement.textContent = `${await activity.participants}`;
        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = " ";
        container.appendChild(activityElement);
        container.appendChild(typeElement);
        container.appendChild(participantElement);
    } catch {
        err => console.error("error", err.message);
    }
  };
