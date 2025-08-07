window.onload = () => {
    let sec = 0;
    let ms = 0;
    let timer = null;

    const secDisplay = document.getElementById("sec");
    const msDisplay = document.getElementById("ms");

    const startBtn = document.querySelector(".start-btn");
    const stopBtn = document.querySelector(".stop-btn");
    const resetBtn = document.querySelector(".reset-btn");

    startBtn.onclick = () => {
        clearInterval(timer);
        timer = setInterval(updateTime, 10);
    };

    stopBtn.onclick = () => {
        clearInterval(timer);
    };

    resetBtn.onclick = () => {
        clearInterval(timer);
        sec = 0;
        ms = 0;
        secDisplay.textContent = "00";
        msDisplay.textContent = "00";
    };

    function updateTime() {
        ms++;

        if (ms <= 99) {
            msDisplay.textContent = ms < 10 ? "0" + ms : ms;
        }

        if (ms > 99) {
            sec++;
            ms = 0;
            secDisplay.textContent = sec < 10 ? "0" + sec : sec;
            msDisplay.textContent = "00";
        }
    }
};
