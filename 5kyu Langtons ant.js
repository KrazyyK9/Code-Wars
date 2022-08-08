// Langton's ant is a two-dimensional Turing machine invented in the late 1980s. The ant starts out on a grid of black and white cells and follows a simple set of rules that has complex emergent behavior.
// Task

// Complete the function and return the nth iteration of Langton's ant with the given input.
// Parameters:

//     grid - a two dimensional array of 1s and 0s (representing white and black cells respectively)
//     column - horizontal position of ant
//     row - ant's vertical position
//     n - number of iterations
//     dir - ant's current direction (0 - north, 1 - east, 2 - south, 3 - west), should default to 0

// Note: parameters column and row will always be inside the grid, and number of generations n will never be negative.
// Output

// The state of the grid after n iterations.
// Rules

// The ant can travel in any of the four cardinal directions at each step it takes. The ant moves according to the rules below:

//     At a white square (represented with 1), turn 90° right, flip the color of the square, and move forward one unit.
//     At a black square (0), turn 90° left, flip the color of the square, and move forward one unit.

// The grid has no limits and therefore if the ant moves outside the borders, the grid should be expanded with 0s, respectively maintaining the rectangle shape.
// Example

// ant([[1]], 0, 0, 1, 0)   # should return: [[0, 0]]

// Initially facing north (0), at the first iteration the ant turns right (because it stands on a white square, 1), flips the square and moves forward.


function ant(grid, column, row, n, dir = 0) {
    // null case
    if (n == 0) return grid

    // functional programming takeaway - don't change the input
    let g = grid;
    let ant = { row, col: column, dir }
    
    // start cycling
    for (let _ = 0; _ < n; _++) {
      
        // turn left if 0, right if 1
        let cellCol = g[ant.row][ant.col];
        ant.dir = cellCol == 1 ? (ant.dir + 1) % 4 : ((ant.dir - 1) % 4 + 4) % 4;
      
        // change color
        g[ant.row][ant.col] = 1 - cellCol;
      
        // move forward one
        if (ant.dir % 2 == 1) {
            ant.col = ant.col + (ant.dir == 1 ? 1 : -1);
        } else {
            ant.row = ant.row + (ant.dir == 2 ? 1 : -1);
        }
      
        // check if the grid is large enough;
        if (ant.row == -1) {
          
            // need a new top row
            ant.row = 0;
            let temp = [];
            for (let i = 0; i < g[0].length; i++) {
                temp.push(0);
            }
            g.unshift(temp);
        } else if (ant.row == g.length) {
          
            // need a new bottom row
            let temp = [];
            for (let i = 0; i < g[0].length; i++) {
                temp.push(0);
            }
            g.push(temp);
        } else if (ant.col == -1) {
          
            // need new left column so extend each row by a '0' at front
            ant.col = 0;
            for (let i = 0; i < g.length; i++) {
                g[i].unshift(0)
            }
        } else if (ant.col == g[0].length) {
          
            // need new right column so extend each row by a '0' at end
            for (let i = 0; i < g.length; i++) {
                g[i].push(0);
            }
        }
    }

    return g;
}