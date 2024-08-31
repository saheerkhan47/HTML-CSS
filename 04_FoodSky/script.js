//selecting popup box and overlay button
const popupoverlay = document.querySelector(".popup-overlay")
const popupbox = document.querySelector(".popup-box")
const addpopupbuttoon = document.getElementById("add-popup-btn")

addpopupbuttoon.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})


//selecting cancel food button
const cancelfood = document.getElementById("cancel-food")
cancelfood.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

    const inputFields = document.querySelectorAll("input[type='text'], textarea");
    inputFields.forEach(function (input) {
        input.value = "";
    });
});

//select container,add-food,input-name,input-category,input-description
const container = document.querySelector(".container")
const addfood = document.getElementById("add-food")
const addname = document.getElementById("input-name")
const addcategory = document.getElementById("input-category")
const adddescription = document.getElementById("input-description")

addfood.addEventListener("click", function (event) {
    event.preventDefault()
    const div = document.createElement("div")
    div.setAttribute("class", "food-container")
    div.innerHTML = `<h2>${addname.value}</h2>
                   <h4>${addcategory.value}</h3>
                   <p>${adddescription.value}</p>
                   <button onclick="deletefood(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

    const inputFields = document.querySelectorAll("input[type='text'], textarea");
    inputFields.forEach(function (input) {
        input.value = "";
    });
});

function deletefood(event) {
    event.target.parentElement.remove()
}


