const durationNodes = document.querySelectorAll('[data-time]');

const durationArray = Array.from(durationNodes);

const secondsTotal = durationArray
	.map(index => index.dataset.time)	
	.map(timeCode => {
         const [min, sec] = timeCode.split(":").map(parseFloat);
         return (min * 60) + sec;
	})
	.reduce((accumulator, currentValue) => accumulator + currentValue);
				

console.log(secondsTotal);

let balanceSeconds = secondsTotal;
const hours = Math.floor(balanceSeconds/3600);

balanceSeconds = balanceSeconds % 3600;
const minutes = Math.floor(balanceSeconds/60);

balanceSeconds = balanceSeconds % 60;

console.log(hours, minutes, balanceSeconds);

document.querySelector('#totalTime').innerHTML = hours +" : "+ minutes +" : "+ balanceSeconds;
