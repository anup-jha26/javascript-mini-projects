// Get elements
const button = document.getElementById("checkBtn");
const inputField = document.getElementById("charInput");
const output = document.getElementById("output");

// Detect Unicode on button click
button.addEventListener("click", () => {
    const char = inputField.value.trim();

    if (char.length === 1) {
        const code = char.charCodeAt(0);
        output.textContent = `Unicode for "${char}" → ${code}`;
    } else {
        output.textContent = "⚠️ Please enter a single character.";
    }
});
