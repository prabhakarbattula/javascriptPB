const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 },
    ];
    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];


// 01. check if any of the persons in the data is an adult?

  const isAdult = people.some(inst => 
    ((new Date()).getFullYear()) - inst.year >=18);

  console.log(isAdult); 

// 02. check if every person in the data is an adult?

  const areAllAdult = people.every(inst => 
    ((new Date()).getFullYear()) - inst.year >=18);

  console.log(areAllAdult);  

 // 03. find a comment with id 823423.
 
 const findComment = comments.find(inst => inst.id == 823423);
 console.log(findComment);   

 // 04. find index number of id 542328.

 console.table(comments);

 const findIndex = comments.findIndex(inst => inst.id == 542328);
 
 const newComments = [
  ...comments.splice(0, findIndex),
  ...comments.splice(findIndex + 1)
 ];
 
 
 console.table(newComments);
 
 


