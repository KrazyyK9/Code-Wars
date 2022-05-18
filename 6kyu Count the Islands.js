// Implement an algorithm which analyzes a two-color image and determines how many isolated areas of a single color the image contains.
// Islands

// An "island" is a set of adjacent pixels of one color (1) which is surrounded by pixels of a different color (0). Pixels are considered adjacent if their coordinates differ by no more than 1 on the X or Y axis.

// Below you can see an example with 2 islands:

//     on the left in the form of a matrix of 1's and 0's
//     on the right in an equivalent stringified form using "X" and "~" characters for better readability

// [
//   [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
//   [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
//   [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
//   [0,0,0,0,0,0,0,0,1,0],          "~~~~~~~~X~"
//   [0,0,0,0,0,1,1,1,0,0],          "~~~~~XXX~~"
//   [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
// ]

// Specification

// Your task is to implement a function which accepts a matrix containing the numbers 0 and 1. It should return the number of islands as an integer.

const countIslands = (image) => {
    let counter = 0;
  
    const dfs = (i, j) => {
      if (i >= 0 && j >= 0 && i < image.length && j < image[i].length && image[i][j] === 1){
        image[i][j] = 0;
        dfs(i + 1, j); // top
        dfs(i, j + 1); // right
        dfs(i + 1, j + 1) // top, right
        dfs(i + 1, j - 1) // top, left
        dfs(i - 1, j); // bottom
        dfs(i, j - 1); // left
        dfs(i - 1, j - 1) // bottom, left
        dfs(i - 1, j + 1) // bottom, right
      }
    };
  
    for (let i = 0; i < image.length; i += 1) {
      for (let j = 0; j < image[i].length; j += 1) {
        if (image[i][j] === 1) {
          counter += 1;
          dfs(i, j);
        }
      }
    }
  
    return counter;
  };