/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fullScreen');

/* Build out functions */

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
	}

function updateButton() {
	const icon = video.paused ? '►' : '❚ ❚';
	console.log(icon);
	toggle.textContent = icon;
	}

function skipVideo() {
			//console.log(this.dataset.skip);
			video.currentTime += parseInt(this.dataset.skip);
		}

function handleRangeUpdate() {
			//console.log(this.value);
			video[this.name] = this.value;
		}

function videoBarUpdate() {
			const percent = (video.currentTime / video.duration) * 100;
			progressBar.style.flexBasis = `${percent}%`;

		}

function scrub(e) {
			const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
			video.currentTime = scrubTime;
		}						




/* Hook up the event listeners*/
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', videoBarUpdate);
skipButtons.forEach(index => index.addEventListener('click', skipVideo));
ranges.forEach(index => index.addEventListener('change', handleRangeUpdate));
progress.addEventListener('click', scrub);
let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
fullScreen.addEventListener('click', function(e) {
    e.preventDefault();
    player.classList.toggle('playerFull');
    if (player.classList == 'player') {fullScreen.innerHTML = "Full Screen &#12276;";}
    else{
    	fullScreen.innerHTML = "Small Screen &#9635;";
    }
        
});

