const pageButtons = document.querySelectorAll(
  ".nutrition-section__pagination-button:not(.prev):not(.next)"
);

pageButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector(".nutrition-section__pagination-button.active")?.classList.remove("active");

    button.classList.add("active");
  });
});