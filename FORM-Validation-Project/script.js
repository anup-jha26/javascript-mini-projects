const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    // Username validation
    if (usernameValue === "") {
        setError(username, "Username cannot be empty");
    } else {
        setSuccess(username);
    }

    // Email validation
    if (emailValue === "") {
        setError(email, "Email cannot be empty");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Please enter a valid email address");
    } else {
        setSuccess(email);
    }

    // Password validation
    if (passwordValue === "") {
        setError(password, "Password cannot be empty");
    } else if (passwordValue.length < 6) {
        setError(password, "Password must be at least 6 characters");
    } else {
        setSuccess(password);
    }

    // Password confirmation validation
    if (passwordCheckValue === "") {
        setError(passwordCheck, "Please confirm your password");
    } else if (passwordCheckValue !== passwordValue) {
        setError(passwordCheck, "Passwords do not match");
    } else {
        setSuccess(passwordCheck);
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isValidEmail(email) {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
