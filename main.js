// Step 1: Get references to all the things
const showButton = document.getElementById("show-share-block-button")
const hideButton = document.getElementById("hide-share-block-button")

const personDiv = document.getElementById("profile-info-container")
const shareDiv = document.getElementById("share-container")

// Step 2: hook into click events
showButton.addEventListener("click", () => {
    personDiv.classList.add("hidden")
    shareDiv.classList.remove("hidden");
})

hideButton.addEventListener("click", () => {
    personDiv.classList.remove("hidden");
    shareDiv.classList.add("hidden")
})