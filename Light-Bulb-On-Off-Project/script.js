// Select elements
const powerSwitch = document.querySelector(".switch");
const pageBody = document.body;

// Toggle the "on" class when the switch is clicked
powerSwitch.addEventListener("click", () => {
    pageBody.classList.toggle("on");
});
