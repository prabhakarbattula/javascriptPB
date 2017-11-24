//const inputs = document.querySelectorAll('.controls input');

  const spacing = document.querySelector('input#spacing');
  const blur = document.querySelector('input#blur');
  const base = document.querySelector('#base');

    function handleUpdateSpacing() { 
      const suffix = this.dataset.sizing || '';  
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      document.getElementById('spacingOutput').innerHTML = this.value; 
    }

    function handleUpdateBlur() { 
      const suffix = this.dataset.sizing || '';  
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      document.getElementById('blurOutput').innerHTML = this.value; 
    }

    function handleUpdateColour() { 
      const suffix = this.dataset.sizing || '';  
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      //document.getElementById('blurOutput').innerHTML = this.value; 
    }
    
    //inputs.forEach(input => input.addEventListener('change' || 'mousemove', handleUpdate));
    spacing.addEventListener('change' || 'mousemove', handleUpdateSpacing);
       blur.addEventListener('change' || 'mousemove', handleUpdateBlur);
       base.addEventListener('change' || 'mousemove', handleUpdateColour);