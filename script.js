// Tab switching between Quiz / Laboratory / Exams / Skills / Projects
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('[data-panel]');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      panels.forEach((panel) => {
        panel.classList.toggle('active', panel.id === targetId);
      });
    });
  });
});