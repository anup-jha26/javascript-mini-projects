// script.js
document.getElementById("bmiForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightFeet = parseInt(document.getElementById("height-feet").value);
    const heightInches = parseInt(document.getElementById("height-inches").value);
    const weight = parseFloat(document.getElementById("weight").value);

    const result = document.getElementById("result");

    if (!gender || !age || !heightFeet || isNaN(heightInches) || !weight) {
        result.innerHTML = "<span style='color:red'>⚠ Please fill all fields correctly.</span>";
        return;
    }

    const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254;
    const bmi = weight / (heightInMeters ** 2);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal Weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    result.innerHTML = `
        Your BMI: <strong>${bmi.toFixed(2)}</strong><br>
        Category: <strong>${category}</strong>
    `;
});
