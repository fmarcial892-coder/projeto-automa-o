const cityGate = document.querySelector('#city-gate');
const citySelect = document.querySelector('#city-select');
const citySearch = document.querySelector('#city-search');
const cityContinue = document.querySelector('#city-continue');
const cityNote = document.querySelector('#city-note');
const cityCount = document.querySelector('#city-count');
let allCities = [];

function renderCities(query = '') {
  if (!citySelect) return;
  const normalized = query.trim().toLocaleLowerCase('pt-BR');
  const filtered = allCities.filter(city => `${city.name} ${city.state}`.toLocaleLowerCase('pt-BR').includes(normalized));
  citySelect.innerHTML = '';
  if (!filtered.length) {
    citySelect.innerHTML = '<option value="">Nenhuma cidade encontrada</option>';
  } else {
    filtered.forEach(city => {
      const option = document.createElement('option');
      option.value = `${city.name} - ${city.state}`;
      option.textContent = `${city.name} - ${city.state}`;
      citySelect.appendChild(option);
    });
  }
  if (cityCount) cityCount.textContent = `${filtered.length} cidade${filtered.length === 1 ? '' : 's'} encontrada${filtered.length === 1 ? '' : 's'} na área de cobertura.`;
  cityContinue.disabled = true;
}

if (cityGate && citySelect && cityContinue) {
  document.body.classList.add('city-selected');
  fetch('/static/cities.json')
    .then(response => response.ok ? response.json() : Promise.reject(new Error('catálogo indisponível')))
    .then(cities => { allCities = cities; renderCities(); })
    .catch(() => {
      citySelect.innerHTML = '<option value="">Não foi possível carregar as cidades</option>';
      if (cityCount) cityCount.textContent = 'Atualize a página para tentar novamente.';
    });

  citySearch?.addEventListener('input', () => renderCities(citySearch.value));
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
    document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
