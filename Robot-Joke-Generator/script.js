const chatBox = document.getElementById("chatBox");
const jokeBtn = document.getElementById("jokeBtn");

// Fetch joke on button click
jokeBtn.addEventListener("click", getJoke);

// Fetch and display joke
async function getJoke() {
    jokeBtn.disabled = true;

    // Add user message
    addMessage("Tell me a joke!", "user");

    // Add loading message
    const loadingMessage = addMessage("🤔 Thinking...", "joke");

    try {
        const response = await fetch("https://icanhazdadjoke.com", {
            headers: { Accept: "application/json" }
        });

        if (!response.ok) throw new Error("Failed to fetch joke");

        const data = await response.json();
        loadingMessage.innerHTML = data.joke;
    } catch (error) {
        loadingMessage.innerHTML = "⚠️ Sorry, I couldn't find a joke right now.";
        console.error(error);
    } finally {
        jokeBtn.disabled = false;
    }
}

// Create and append a message to the chat
function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.classList.add("message", type);
    msg.innerHTML = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
    return msg;
}
