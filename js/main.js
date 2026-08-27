// js/main.js
import { initDarkMode } from './components/darkmode.js';
import { initAccordion } from './components/accordion.js';
import { initNav } from './components/hamburger.js';

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initNav();
    try {
        initAccordion();
    } catch (error) {
        console.log(error);
    }
});