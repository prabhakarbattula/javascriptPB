const inputs = document.querySelectorAll('.controls input');
    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

//code for displaying values based on slider drag

    div.myTemplate.rendered = function(){
		document.getElementById("spacing").oninput = function() {
    		myFunction()
		};
	}

function myFunction() {
   var val = document.getElementById("spacing").value //gets the oninput value
   document.getElementById('output').innerHTML = val //displays this value to the html page
   console.log(val)
}


//intercom code added
