// Select clock element
const clockDisplay = document.getElementById("digitalClock");

// Function to update time
function updateClock() {
    const now = new Date();
    clockDisplay.textContent = now.toLocaleTimeString();
}

// Update every second
setInterval(updateClock, 1000);

// Run immediately so user doesn’t wait 1s
updateClock();
