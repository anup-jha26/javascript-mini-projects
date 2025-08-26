// Function to check palindrome
function checkPalindrome(word) {
    const processed = word.toLowerCase().replace(/[^a-z0-9]/g, ""); // clean input
    const reversed = processed.split("").reverse().join("");
    return processed === reversed;
}

// Event handler
function handleCheck() {
    const input = document.getElementById("wordInput");
    const result = document.getElementById("output");

    if (input.value.trim() === "") {
        result.textContent = "Please enter a word or phrase.";
        result.style.color = "red";
    } else if (checkPalindrome(input.value)) {
        result.textContent = `"${input.value}" is a Palindrome ✅`;
        result.style.color = "green";
    } else {
        result.textContent = `"${input.value}" is Not a Palindrome ❌`;
        result.style.color = "red";
    }

    result.classList.add("fade-in");
    setTimeout(() => result.classList.remove("fade-in"), 500);
    input.value = "";
}

// Attach event listener
document.getElementById("checkBtn").addEventListener("click", handleCheck);
