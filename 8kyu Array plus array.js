// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let array = arr1.concat(arr2)
    let sum = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  
    return sum
    
  }

//   function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
//   }