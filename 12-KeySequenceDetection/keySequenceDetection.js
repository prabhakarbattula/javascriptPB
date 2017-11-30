
const pressed = [];

const secretCode = 'wesbos';
const statusDisplay = document.querySelector('div#status');
const keysDisplay = document.querySelector('p#loggedItems');

window.addEventListener('keydown',(e) => {
	//console.log(e.key);
	pressed.push(e.key);
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
	const joined = pressed.join('');

	if (joined.includes(secretCode)) {statusDisplay.innerHTML = 'Hey code busted!'; statusDisplay.style.background = '#C8FC97';}
		else
		{
			statusDisplay.innerHTML = 'Keep trying'; statusDisplay.style.background = "orange";
		}

	console.dir(joined);
	keysDisplay.innerHTML = joined;
	// The above line will display the logged key inputs on to the page itself.


});
