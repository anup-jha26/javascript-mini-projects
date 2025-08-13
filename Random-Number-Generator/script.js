function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("generateButton").addEventListener("click", () => {
    const min = 1;
    const max = 100;
    const number = getRandomNumber(min, max);

    const resultElement = document.getElementById("result");
    resultElement.textContent = number;

    // Add fade animation
    resultElement.style.opacity = "0";
    setTimeout(() => {
        resultElement.style.opacity = "1";
    }, 100);
});
