const today = new Date();
const dayIndex = today.getDay();
let currentDay;
let dailyMessage;
let bgColor;

switch (dayIndex) {
    case 0:
        currentDay = "Sunday";
        dailyMessage = "Slow down and enjoy the calm.";
        bgColor = "#FFDAB9"; // peach
        break;
    case 1:
        currentDay = "Monday";
        dailyMessage = "A fresh start to chase your goals.";
        bgColor = "#FFFACD"; // light yellow
        break;
    case 2:
        currentDay = "Tuesday";
        dailyMessage = "Keep the momentum going strong.";
        bgColor = "#E0FFFF"; // light cyan
        break;
    case 3:
        currentDay = "Wednesday";
        dailyMessage = "Halfway through — you’ve got this.";
        bgColor = "#E6E6FA"; // lavender
        break;
    case 4:
        currentDay = "Thursday";
        dailyMessage = "Stay focused, the weekend is close.";
        bgColor = "#F5DEB3"; // wheat
        break;
    case 5:
        currentDay = "Friday";
        dailyMessage = "Time to wrap up and celebrate wins.";
        bgColor = "#FFE4E1"; // misty rose
        break;
    case 6:
        currentDay = "Saturday";
        dailyMessage = "Make the most of your free time.";
        bgColor = "#F0FFF0"; // honeydew
        break;
}

document.getElementById("weekday").textContent = currentDay;
document.getElementById("quote").textContent = dailyMessage;
document.body.style.backgroundColor = bgColor;
