// Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

// For example, the transpose of:

// | 1 2 3 |
// | 4 5 6 |

// is

// | 1 4 |
// | 2 5 |
// | 3 6 |

// The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.

function transpose(matrix) {
    let arr = [];
    for (let i = 0; i < matrix[0].slice().length; i++) { // gets length of array of the first element
      let holdingArr = [];
        for (let j = 0; j < matrix.slice().length; j++){
          holdingArr.push(matrix[j][i])
        }
      arr.push(holdingArr)
    }
    return arr
  }


//   function transpose(matrix) {
//     return matrix[0].map(function(uselessValue, colIndex){
//         return matrix.map(function(uselessRow, rowIndex){
//             return matrix[rowIndex][colIndex];
//         });
//     });
// }