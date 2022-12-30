// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.
// Fundamentals
// Strings
// Arrays

let isVow = a => a.map(numToVow => 
    numToVow === 97 ? "a" : 
    numToVow === 101 ? "e" : 
    numToVow === 105 ? "i" : 
    numToVow === 111 ? "o" : 
    numToVow === 117 ? "u" : 
    numToVow
   );