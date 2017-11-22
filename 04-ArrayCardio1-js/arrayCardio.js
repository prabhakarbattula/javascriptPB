const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarstrom', year: 1829, passed: 1909 }
    ];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// 01. filtering inventors who are born between 1500 and 1600

    function inventorDate() {
        const inventorDate = inventors.filter(a => a.year >=1500 && a.year <1600);
        console.table(inventorDate);
    }

    // 02. mapping inventors first and last names

    function inventorFullNames(){
      const inventorsFullNames = inventors.map(inventor => inventor.first + ' '+ inventor.last);
      console.table(inventorsFullNames);
    }

    // 03. sorting inventors from oldest to youngest.

    function inventorOldToNew(){
      const inventorOldToNew = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
      console.table(inventorOldToNew);
    }

    // 04. how many years did each inventor lived.

    function inventorsAllLived(){
      const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);
    console.log(totalYears);
      }

     // 05.  Sort inventors by years lived.
     
     function sortInventorsYearsLived(){
      const inventorLived = inventors.sort(function(a,b){
        const firstGuy = a.passed - a.year;
        const secondGuy = b.passed - b.year;

        return firstGuy > secondGuy ? 1 : -1;
        
      })
      console.table(inventorLived);
    }

      
      

    // Adding all functions in this function to run on page load.
    function allFunctions(){
      inventorDate();
      inventorFullNames();
      inventorOldToNew();
      inventorsAllLived();
      sortInventorsYearsLived();
    }



    