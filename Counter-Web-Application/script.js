(() => {
    const increaseBtn = document.querySelector('.increase');
    const decreaseBtn = document.querySelector('.decrease');
    const display = document.getElementById('currentValue');
    const circle = document.querySelector('.value-circle');

    let value = 0;

    const refreshDisplay = () => {
        display.textContent = value;

        circle.classList.remove('positive', 'negative');

        if (value > 0) {
            circle.classList.add('positive');
        } else if (value < 0) {
            circle.classList.add('negative');
        }
    };

    increaseBtn.addEventListener('click', () => {
        value++;
        refreshDisplay();
    });

    decreaseBtn.addEventListener('click', () => {
        value--;
        refreshDisplay();
    });
})();
