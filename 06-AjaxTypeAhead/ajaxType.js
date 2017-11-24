const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const data = [];


fetch(endpoint)
	.then(index => index.json())
	.then(index => data.push(...index));


function findMatches(a,b) {
	return data.filter(index => {
		const regex = new RegExp(a, 'gi');
		return index.city.match(regex) || index.state.match(regex);
	})
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function displayMatches() {
  const matchArray = findMatches(this.value, data);
  const display = matchArray.map(index => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = index.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = index.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(index.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = display;
  
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);