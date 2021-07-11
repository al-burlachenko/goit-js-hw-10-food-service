import '../node_modules/normalize.css/normalize.css';

import upcominEvents from './menu.json';
import eventsTemplate from './templates/events.hbs';
import './sass/main.scss';

// console.log(eventsTemplate({ items: upcominEvents }));

const menuBoard = document.querySelector('.js-menu');
const themeToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
let currentTheme = localStorage.getItem('theme');
let themeToggleCheked = localStorage.getItem('themeToggleCheked');
console.log(themeToggleCheked);

if (currentTheme) {
  body.classList.add(currentTheme);
  themeToggle.checked=themeToggleCheked;
} else body.classList.add(Theme.LIGHT);

themeToggle.addEventListener('change', onThemeChange);
menuBoard.innerHTML = eventsTemplate({ items: upcominEvents });

function onThemeChange(event) {
  console.log(currentTheme);
  if (themeToggle.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else body.classList.replace(Theme.DARK, Theme.LIGHT);

  localStorage.setItem('theme', body.classList);
  localStorage.setItem('themeToggleCheked', themeToggle.checked);
  currentTheme = body.classList[0];
}
