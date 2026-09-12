const cityGate = document.querySelector('#city-gate');
const citySelect = document.querySelector('#city-select');
const cityContinue = document.querySelector('#city-continue');
const cityNote = document.querySelector('#city-note');
if (cityGate && citySelect && cityContinue) {
  document.body.classList.add('city-selected');
  citySelect.addEventListener('change', () => {
    const selected = citySelect.value.trim();
    cityContinue.disabled = !selected;
    if (selected) cityNote.textContent = `Vamos consultar as opções disponíveis em ${selected}.`;
    else cityNote.textContent = 'Selecione uma cidade para consultar a disponibilidade.';
  });
  cityContinue.addEventListener('click', () => {
    if (!citySelect.value) return;
    cityGate.classList.add('is-hidden');
    document.body.classList.add('city-opened');
    document.querySelector('#beneficios')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.desktop-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('mobile-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('mobile-open')));
}

document.querySelectorAll('details').forEach(item => {
  item.addEventListener('toggle', () => {
    const icon = item.querySelector('summary span');
    if (icon) icon.textContent = item.open ? '−' : '+';
  });
});
