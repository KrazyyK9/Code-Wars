// Your task is to write a function which cuts cancer cells from the body.
// Cancer cells are divided into two types:

//     Advance stage,described as letter C
//     Initial stage,described as letter c

// Rest cells are divided as follows:

//     Normal cell,described as lowercase letter
//     Important cell,described as uppercase letter

// Prerequisites:

//     Important cell,cannot be cut out.
//     Advance cancer cell,should be cut out with adjacent cells if it can be done.

// Function input is a string (representing a body), remove "cancer" characters (based on the described rules) and return the body cured of those "cancer" characters.

//Parameters: only letters, some capital, some lowercase
//Response: return string value
//Examples: doTest('CC', ''); doTest('aCb', ''); ('BCE', 'BE'); doTest('acCb', 'a')

//Psuedo code: 
//organism.split('') to an array
//.replace or .slice with if statements to check for Capitals or lowercases and values
//look for reset cells once C or c is found
//empty string concat results to it
// check for C then check if index before or after it is lowercase

function cutCancerCells(organism){
    let arr = organism.split('')
    arr.forEach((_, i) => {
      
      if(arr[i] === 'C'){
        if(arr[i-1] && arr[i-1] === arr[i-1].toLowerCase()){
          arr[i-1] = '.'
        }
        if(arr[i+1] && arr[i+1] === arr[i+1].toLowerCase()){
          arr[i+1] = '.'
        }
        arr[i] = '.'
      } // end of capital C check
      
      if(arr[i] === 'c' && arr[i-1] !== 'C' && arr[i+1] !== 'C'){
        arr[i] = '.'
      } // end of lowercase c check
    
  
    console.log(i)
    }) //end of forEach
    
    return arr.filter(x=>x!=='.').join('')
  } // end of function

  //OR

  //const cutCancerCells = organism => organism.replace(/c|[a-z]?C[a-z]?/g,'')