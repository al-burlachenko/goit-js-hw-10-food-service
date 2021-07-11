import "../node_modules/normalize.css/normalize.css";

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

themeToggle.addEventListener('change', onThemeChange);

body.classList.add(Theme.LIGHT);
menuBoard.innerHTML = eventsTemplate({ items: upcominEvents });

function onThemeChange(event) {
  console.log(themeToggle.checked);
  if (themeToggle.checked) {
    return body.classList.replace(Theme.LIGHT, Theme.DARK);
  }
  return body.classList.replace(Theme.DARK, Theme.LIGHT);
}
