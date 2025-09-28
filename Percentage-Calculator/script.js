document.addEventListener("DOMContentLoaded", () => {
    const percentageSlider = document.getElementById("percentageSlider");
    const percentageValue = document.getElementById("percentageValue");
    const calculateBtn = document.getElementById("calculateBtn");
    const resultBox = document.getElementById("result");

    // Update percentage label when slider moves
    percentageSlider.addEventListener("input", () => {
        percentageValue.textContent = `${percentageSlider.value}%`;
    });

    // Calculate percentage when button is clicked
    calculateBtn.addEventListener("click", () => {
        const baseNumber = document.getElementById("baseNumber").value;

        if (!baseNumber) {
            resultBox.style.color = "red";
            resultBox.textContent = "⚠️ Please enter a number first!";
            return;
        }

        const percentage = parseFloat(percentageSlider.value);
        const result = ((parseFloat(baseNumber) * percentage) / 100).toFixed(2);

        resultBox.style.color = "#4caf50";
        resultBox.textContent = `✅ ${percentage}% of ${baseNumber} is ${result}`;
    });
});
