const categoryButtons = document.querySelectorAll(".nutrition-section__sorting-button");

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {

    document.querySelector(".nutrition-section__sorting-button.active")?.classList.remove("active");

    button.classList.add("active");
  });
});