const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  
  let inBetween = false;

  if (e.shiftKey && this.checked) {

    checkBoxes.forEach(index => {
      console.dir(index);

      if (index === this || index === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them inbetween!');
        
      }

      if (inBetween) {
        index.checked = true;
                
      }

      

    });

  }

  lastChecked = this;
}

checkBoxes.forEach(index => index.addEventListener('click', handleCheck));