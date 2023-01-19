// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// Array's length > 2.

// More details here: https://en.wikipedia.org/wiki/Comma-separated_values
// Fundamentals
// Arrays
// Strings

const toCsvText = array => array.join('\n');

//OR

// function toCsvText(array) {
//     let str = ''
     
//     for (let i = 0; i < array.length; i++){
//       str += array[i].join(',')
      
//       if (array[i+1] !== undefined){
//         str += '\n'
//     }   
//    }
//       return str
//  }