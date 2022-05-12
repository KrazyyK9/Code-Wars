// Task

// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.
// Example

// For n = 152, the output should be 52;

// For n = 1001, the output should be 101.
// Input/Output

//     [input] integer n

//     Constraints: 10 ≤ n ≤ 1000000.

//     [output] an integer

function deleteDigit(n) {
    //coding and coding..
    let arr = n.toString().split('').map(x => parseInt(x, 10))
    let result = [];
    for(let i = 0; i <= arr.length; i++){
    result.push( ((arr.slice(0,i)+arr.slice(i+1))).split(',').join('') )
    }
    
    return parseInt(result.sort((a,b) => b-a)[1]) 
    
  }