// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
// Fundamentals
// Strings
// Arrays

function sumMix(arr){
    //arr reduce to a sum
    return arr.reduce((acc, cur) => acc+Number(cur), 0)
  }