// All pages. Header. Menu
const menu = document.querySelector(`.menu`);
menu.classList.remove(`menu--no-js`);

const menuBtn = menu.querySelector(`.menu__toggle-btn`);
menuBtn.addEventListener(`click`, () => {
  menu.classList.toggle(`menu--opened`);
});

// Catalog. Country Filter
const countryFilter = document.querySelector(`.country-filter`);

countryFilter.classList.remove(`country-filter--no-js`);

const openBtn = countryFilter.querySelector(`.country-filter__open-btn`);
const closeBtn = countryFilter.querySelector(`.country-filter__close-btn`);
const collapseBtn = countryFilter.querySelector(`.country-filter__collapse-btn`);

openBtn.addEventListener(`click`, () => {
  countryFilter.classList.add(`country-filter--expanded`);
});

closeBtn.addEventListener(`click`, () => {
  countryFilter.classList.remove(`country-filter--expanded`);
});

collapseBtn.addEventListener(`click`, () => {
  countryFilter.classList.remove(`country-filter--expanded`);
});
