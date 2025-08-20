document.addEventListener("DOMContentLoaded", () => {
    const userNumber = document.getElementById("userNumber");
    const primeBtn = document.getElementById("primeBtn");
    const displayResult = document.getElementById("displayResult");

    primeBtn.addEventListener("click", () => {
        const value = parseInt(userNumber.value);

        if (isNaN(value)) {
            displayResult.textContent = "⚠️ Please enter a valid number!";
            displayResult.style.color = "red";
            return;
        }

        if (isPrimeNumber(value)) {
            displayResult.textContent = `${value} is a Prime Number ✅`;
            displayResult.style.color = "green";
        } else {
            displayResult.textContent = `${value} is NOT a Prime Number ❌`;
            displayResult.style.color = "crimson";
        }
    });

    // Prime check using divisor count method
    function isPrimeNumber(n) {
        let divisorCount = 0;

        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                divisorCount++;
            }
        }

        return divisorCount === 2;
    }
});
