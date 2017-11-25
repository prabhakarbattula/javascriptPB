const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const base = document.querySelector('#base');
const lineWidth = document.querySelector('#lineWidth');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#ff0000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = '#ff0000';
let line = 1;


function draw(e) {
  if (!isDrawing) return; 
    
  ctx.strokeStyle = hue; 
  console.log(line);
  ctx.lineWidth = line;
   
    
  ctx.beginPath();
  
  ctx.moveTo(lastX, lastY);
  
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}
  
function handleUpdateColour() { 
      const suffix = this.dataset.sizing || '';  
       hue = this.value + suffix;
       return;
    }

function handleUpdateLineWidth() { 
      const suffix = this.dataset.sizing || '';  
       line = this.value;
       return;
    }    


canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
base.addEventListener('change' || 'mousemove', handleUpdateColour);
lineWidth.addEventListener('change' || 'mousemove', handleUpdateLineWidth);

