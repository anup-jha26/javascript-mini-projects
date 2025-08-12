const textarea = document.getElementById('textarea');
const counter = document.querySelector('.counter');

function countingCharacters() {
    const length = textarea.value.length;
    counter.textContent = length;
}
