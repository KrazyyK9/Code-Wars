// Unfinished Loop - Bug Fixing #1

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
// Debugging

// function createArray(number){
//   var newArray = [];
  
//   for(var counter = 1; counter <= number; counter++){
//     newArray.push(counter);
//   }
  
//   return newArray;
// }

// function createArray(number){
//   return Array(number).fill().map((_, i) => i + 1)
// }

let createArray = number => Array.from({length: number}, (_, i) => i+1)