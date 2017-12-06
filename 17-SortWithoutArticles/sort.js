const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'An Old Dog', 'Anywhere But Here'];
const removedArt = []; 

const element = document.querySelector('#bands');

const removeArticles = bands.map(band => (band.replace(/(The |A |An )/,"").trimLeft()));
	//console.log(e);
	//var articles = replaced.map(replace => (band.value - replace.value));	


function strip(bandName) {
	return bandName.replace(/(a |an |the )/i, '').trim();
}

/*
const sortBands = bands.sort(function(a, b){
	if (strip(a) > strip(b)) {
		return 1;
	} else {
		return -1;
	}
});
*/

const sortBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

//console.table(sortBands);

element.innerHTML = sortBands.map(index => `<li>${index}</li>`).join('');

