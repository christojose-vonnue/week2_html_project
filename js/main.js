// js/main.js
import { initDarkMode } from './components/darkmode.js';
import { initAccordion } from './components/accordion.js';
import { initNav } from './components/hamburger.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mark the start of initialization
  performance.mark('init-start');

  initDarkMode();
  performance.mark('darkmode-done');

  initNav();
  performance.mark('nav-done');

  try {
    initAccordion();
    performance.mark('accordion-done');
    performance.measure('Accordion Boot', 'nav-done', 'accordion-done');
  } catch (error) {
    console.log(error);
  }

  // 2. Mark the end of initialization
  performance.mark('init-end');

  // 3. Create custom performance measures
  performance.measure('Total Portfolio Init', 'init-start', 'init-end');
  performance.measure('Dark Mode Boot', 'init-start', 'darkmode-done');

  // 4. Inspect measures in the console
  const measures = performance.getEntriesByType('measure');
  measures.forEach((measure) => {
    console.log(`${measure.name}: ${measure.duration.toFixed(2)}ms`);
  });

  // 5. Clean up entry buffer memory
  performance.clearMarks();
  performance.clearMeasures();
});