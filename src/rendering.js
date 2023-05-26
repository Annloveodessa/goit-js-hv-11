import refs from './refs';

function renderList(country) {
  const listItem = country
    .map(
      (
        { flags, name } 
      ) =>
        `<li class="list-item"> <img src="${flags.svg}" alt="Flag of the Country" width="50"> <h2 class="class-heading-1">${name.official}</h2></li>  `
    )
    .join(' ');

  
  refs.countryListEl.insertAdjacentHTML('beforeend', listItem);
}

function countryCard([country]) {
  const { flags, name, capital, population, languages } = country;
  const severalLangs = Object.values(languages).join(', ');
  const cardMarkup = `<div class="card-container-1"><img src="${flags.svg}" alt="Flag of the Country" width="100"><h2 class="class-heading">${name.official}</h2></div>
  <div class="card-container-2">
  <div class="super-class">Capital: <div class="class1">${capital}</div></div>
  <div class="super-class">Population: <div class="class1">${population}</div></div>
  <div class="super-class">Languages: <div class="class1">${severalLangs}</div></div>
  </div>`;
  
  refs.countryInfoEl.insertAdjacentHTML('beforeend', cardMarkup);
}

export { renderList, countryCard };
