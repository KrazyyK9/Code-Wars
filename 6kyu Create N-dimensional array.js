// Little boy Vasya was coding and was playing with arrays. He thought: "Is there any way to generate N-dimensional array"?
// Let us help little boy Vasya. Target of this Kata is to create a function, which will generate N-dimensional array. For simplicity all arrays will have the same length.
// Input:
// N: number -> depth of outter array, N > 0
// size: number -> length of all arrays, size > 0
// All inputs will be valid.

// On the last (deepest) level we should put a string wich will describe the depth of our array. Example: 'level 2'
// Example:
// for createNDimensionalArray(2,3) output should be:

// [
//   ['level 2', 'level 2', 'level 2'],
//   ['level 2', 'level 2', 'level 2'],
//   ['level 2', 'level 2', 'level 2'],
// ]


// for createNDimensionalArray(3,2) output should be:

// [
//   [
//     ['level 3', 'level 3'],
//     ['level 3', 'level 3'],
//   ], 
//   [
//     ['level 3', 'level 3'],
//     ['level 3', 'level 3'],
//   ],
// ]

// Good luck!

//Parameters: n is depth of outter array, N > 0. size is length of all arrays, size > 0
//Response: Return array with string values
//Example: createNDimensionalArray(3,1), [[['level 3']]]. createNDimensionalArray(1,3), ['level 1', 'level 1', 'level 1']
//Pseudo code

// const createNDimensionalArray = (n, size ) => {
  
//     //create array with size specified in the parameter and fill it with level + n
//     let arr = Array(size).fill(`level ${n}`)
    
//     //create while loop and loop through n times -1 since the previous command creates the first array. Create array with size specified in the parameter and fill it with the arr
//     while (--n > 0){
//       arr = Array(size).fill(arr)
//     }
    
//     //return array
//     return arr
    
//   }


//RECURSIVE WAY

const createNDimensionalArray = (n, size, str = n) => {

    if (n === 1){
      return new Array(size).fill(`level ${str}`)
    }
    
    return new Array(size).fill(createNDimensionalArray(n - 1, size, str))
    
  }