// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    //your code here
    number = number - (number * 2)
    return number
  }
  opposite(9.8)