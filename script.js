// FAQ Accordion – keyboard-accessible toggle
(function () {
  'use strict';

  const triggers = document.querySelectorAll('.accordion__trigger');

  triggers.forEach(function (trigger) {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);

    // Sync initial aria-hidden from aria-expanded
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    panel.setAttribute('aria-hidden', String(!isOpen));

    trigger.addEventListener('click', function () {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const newState = !expanded;

      trigger.setAttribute('aria-expanded', String(newState));
      panel.setAttribute('aria-hidden', String(!newState));
    });
  });
})();
