const sortingMenu = document.querySelector('.sorting-backdrop');
const sortingBtnOpen = document.querySelector('.nutrition-section__mobile-sorting-button');
const sortingBtnClose = document.querySelectorAll('.sorting-btn-close');

const toggleSorting = () => sortingMenu.classList.toggle('is-hidden');

sortingBtnOpen.addEventListener('click', toggleSorting);
sortingBtnClose.forEach(btn => {
  btn.addEventListener('click', toggleSorting);
});