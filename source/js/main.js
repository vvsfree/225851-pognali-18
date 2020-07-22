// All pages. Header. Menu
const menu = document.querySelector(`.menu`);
menu.classList.remove(`menu--no-js`);

const menuBtn = menu.querySelector(`.menu__toggle-btn`);
menuBtn.addEventListener(`click`, () => {
  menu.classList.toggle(`menu--opened`);
});

// Sticky menu
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= window.innerHeight) {
    menu.classList.add("menu--sticky")
  } else {
    menu.classList.remove("menu--sticky");
  }
});


// Catalog. Country Filter
const countryFilter = document.querySelector(`.country-filter`);

if (countryFilter) {
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
}


// Form. Country Selection Widget
// Временно работаю только с "пустым" контролом выбора страны
const dropdownControl = document.querySelector('.dropdown-control:not(.dropdown-control--filled)');
if (dropdownControl) {
  const dropdownBtn = dropdownControl.querySelector('.dropdown-btn');
  const countryWidget = document.querySelector('.fieldset__country-widget');

  dropdownBtn.addEventListener('click', () => {
    dropdownControl.classList.toggle('dropdown-control--active');
    dropdownBtn.classList.toggle('dropdown-btn--active');
    countryWidget.classList.toggle('fieldset__country-widget--expanded');
  });
}
