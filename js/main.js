fetch("houses.json")
    .then((response) => response.json())
    .then((data) => {
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = "";

        //the argument "house" passed to the arrow function
        //holds each item in the array in turn.
        data.forEach((house) => {
            let family = house.members.join(" | ");

            // generate the html snippet for one array item
            //to be added to the "html" temp holder.
            // format using a description list
            let objInfo = `<dl class="house">${house.name}</dl>
        <dd class="folks">${family}</dd>`;
            html += objInfo;
        });

        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = html;
        // add css style
       

    })
    .catch((err) => console.log("Oops!", err));
    //this only runs if there is an error during the above process