function calculateAge() {
  const today = new Date();
  const birthdateInput = document.getElementById("birthdate").value;

  if (!birthdateInput) {
    alert("Please select a valid date.");
    return;
  }

  const birthDate = new Date(birthdateInput);

  if (birthDate > today) {
    alert("Birthdate cannot be in the future!");
    return;
  }

  const ageInMilliseconds = today - birthDate;
  const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
  const ageInMinutes = Math.floor(ageInSeconds / 60);
  const ageInHours = Math.floor(ageInMinutes / 60);
  const ageInDays = Math.floor(ageInHours / 24);
  const ageInWeeks = Math.floor(ageInDays / 7);

  // Calculate exact years/months/days
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonth;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const resultContainer = document.getElementById("resultContainer");
  const result = document.getElementById("result");

  result.innerHTML = `
        <div class="result-item">
            <h3>Your Exact Age:</h3>
            <p>${years} Years, ${months} Months, ${days} Days</p>
        </div>
        <div class="result-item">
            <h3>Months Passed:</h3>
            <p>${Math.floor(ageInDays / 30.44)}</p>
        </div>
        <div class="result-item">
            <h3>Weeks Passed:</h3>
            <p>${ageInWeeks}</p>
        </div>
        <div class="result-item">
            <h3>Days Passed:</h3>
            <p>${ageInDays}</p>
        </div>
        <div class="result-item">
            <h3>Hours Passed:</h3>
            <p>${ageInHours}</p>
        </div>
        <div class="result-item">
            <h3>Minutes Passed:</h3>
            <p>${ageInMinutes}</p>
        </div>
        <div class="result-item">
            <h3>Seconds Passed:</h3>
            <p>${ageInSeconds}</p>
        </div>
    `;

  // Next Birthday Countdown
  const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  const diff = nextBirthday - today;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  document.getElementById("birthdayCountdown").textContent =
    `🎂 Your next birthday is in ${daysLeft} day(s)!`;

  resultContainer.style.display = "block";
}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateAge();
});

document.getElementById("clearButton").addEventListener("click", () => {
  document.getElementById("resultContainer").style.display = "none";
});
