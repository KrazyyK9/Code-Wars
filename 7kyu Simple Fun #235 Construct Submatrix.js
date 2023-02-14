// Task

// Given a matrix, find its submatrix obtained by deleting the specified rows and emptying the specified columns.
// Input/Output

// [input] 2D integer array matrix

// 2-dimensional array of integers.

// 1 ≤ matrix.length ≤ 10,

// 1 ≤ matrix[0].length ≤ 10,

// 0 ≤ matrix[i][j] ≤ 9.

// [input] integer array rowsToDelete

// Array of indices (0-based) of rows to be deleted.

// 0 ≤ rowsToDelete.length ≤ 5,

// 0 ≤ rowsToDelete[i] < matrix.length.

// [input] integer array columnsToDelete

// Array of indices (0-based) of columns to be deleted.

// 0 ≤ columnsToDelete.length ≤ 5,

// 0 ≤ columnsToDelete[i] < matrix[0].length.

// [output] 2D integer array
// Example

// For

// matrix = [ [1, 0, 0, 2]
//          , [0, 5, 0, 1]
//          , [0, 0, 3, 5]
//          ]
// rowsToDelete = [1]
// columnsToDelete = [0, 2]

// the output should be

// [ [0, 2]
// , [0, 5]
// ]

// Fundamentals
// Matrix

function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {  
  
    //define the row and the column length
    let rows = matrix.length
    let columns = matrix[0].length
    
    //define result arr
    let resultArr = [];
    
    //Loop through the rows
    for (let i = 0; i < rows; i++){
      //if the current row is being deleted, skip it
      if (rowsToDelete.includes(i)){
        continue;
      }
      
      //create newRow to store arr elements
      let newRow = [];
      
      //Loop through the columns
      for (let j = 0; j < columns; j++){
        //if the current column is being deleted, skip it
        if (columnsToDelete.includes(j)){
          continue;
        }
        
        //add element to newRow
        newRow.push(matrix[i][j])
      }
      
      //Push newRow to resultArr
      resultArr.push(newRow);
      
    }
    
    //Return resultArr
    return resultArr;
    
    
  }


//   const constructSubmatrix = (matrix, rowsToDelete, columnsToDelete) => matrix.map(row => row.filter((_, i) => !columnsToDelete.includes(i))).filter((_, i) => !rowsToDelete.includes(i))