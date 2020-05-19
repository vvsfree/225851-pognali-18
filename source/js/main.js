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
