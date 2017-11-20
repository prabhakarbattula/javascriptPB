window.addEventListener('keydown',function(e){
	
	const key = document.querySelector(`td[data-key="${e.keyCode}"]`);
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	
	if(!audio) return; //this will stop the function
	audio.currentTime=0;
	audio.play();

	key.classList.add('playing');
	

});

function removeTransition(e){
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
};


const arr = document.querySelectorAll('.border');
arr.forEach(arr => arr.addEventListener('transitionend', removeTransition));

//borders.forEach(border => border.addEventListener('transitionend', removeTransition ));


