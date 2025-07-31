const inputs = document.querySelectorAll('.controls input');

function applyStyle() {
    const unit = this.dataset.sizing || '';
    const value = this.value + unit;

    // Update the CSS variable
    document.documentElement.style.setProperty(`--${this.name}`, value);

    // Show the current value next to the label
    const displaySpan = document.getElementById(`${this.name}-value`);
    if (displaySpan) {
        displaySpan.textContent = value;
    }
}

// Attach events to all inputs
inputs.forEach(input => {
    input.addEventListener('input', applyStyle);
    input.addEventListener('change', applyStyle);
});
