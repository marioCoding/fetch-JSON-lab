document.addEventListener('DOMContentLoaded', initialize);

async function initialize() {
    let act = await fetch("http://www.boredapi.com/api/activity/")
    let activity = await act.json();
    try {
        const activityElement = document.createElement("h3");
        activityElement.textContent = activity.activity;
        const typeElement = document.createElement("p");
        typeElement.textContent = activity.type;
        const participantElement = document.createElement("p");
        participantElement.textContent = activity.participants;
        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = " ";
        container.appendChild(activityElement);
        container.appendChild(typeElement);
        container.appendChild(participantElement);
    } catch {
        err => console.log("error", err.message);
    }
  };
