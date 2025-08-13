const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    acc.addEventListener("click", () => {
        acc.classList.toggle("active");
    });
});
