// Given an array of ints, check if is it possible to choose a group of some of the ints, such that the group sums to the given target with this additional constraint: If a value in the array is chosen to be in the group, the value immediately following it in the array must not be chosen.

// For example:

// [2, 5, 10, 4], 12 → true

// [2, 5, 10, 4], 14 → false

// [2, 5, 10, 4], 7 → false

// Note: input length from 0 to 20.
// Lists
// Recursion
// Fundamentals

//P: array equal to a and number to add up to eqaul to n. Constraint being that if you add a value you have to skip to the next one
//R: true or false
//E:[2, 5, 10, 4], 12 → true. [2, 5, 10, 4], 14 → false. [2, 5, 10, 4], 7 → false
//Psu:

function sumUpNoAdjacents(a,n) {
    //if we hit the target return true
    if (n === 0) return true
    //check if we overshot the target
    if (n < 0) return false
    //if array empty, return false
    if (a.length === 0) return false
    
    //return with new array slicing adjacent element
    return sumUpNoAdjacents(a.slice(2), n - a[0]) || sumUpNoAdjacents(a.slice(1), n);
  }