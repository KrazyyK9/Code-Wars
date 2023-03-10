// Your task is to find the maximum number of queens that can be put on the board so that there would be one single unbeaten square (ie. threatened by no queen on the board).

// The Queen can move any distance vertically, horizontally and diagonally.
// Input

// The queens(n) function takes the size of the chessboard.

// n∈Zn\in\Zn∈Z, so it can be negative, and values can go up to 1411000141^{1000}1411000.
// Output

//     The maximum number of queens to leave one single unbeaten square
//     Return 0 if n is negative.

// Examples

//     n=4→6 queensn=4 \rightarrow 6\ queens n=4→6 queens
//     n=5→12 queensn=5 \rightarrow 12\ queens n=5→12 queens

// Good luck )
// Algorithms

const queens = n => n < 3 ? 0n : ((n - 1n) * (n - 1n)) - (n - 1n);