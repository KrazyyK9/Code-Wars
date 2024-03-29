// Array.prototype.length will give you the number of top-level elements in an array.

// Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

// For example:

// deepCount([1, 2, 3]);  
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);  
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);  
// //>>>>> 7

// The input will always be an array.
// Arrays
// Recursion
// Fundamentals

function deepCount(a){
  
    let count = 0
    
    //count elements in array
    for (let i = 0; i < a.length; i++){
      if (!Array.isArray(a[i])){
        count++
      }//end if
      
      else {
        count++
        count += deepCount(a[i])
        //deepCount(a[i], count)
      }//end else
      
    }//end for
    
    return count
    
  }//end deepCount

  //OR

//   function deepCount(a){
//     let count = a.length;
//     for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
//     return count;
//   }