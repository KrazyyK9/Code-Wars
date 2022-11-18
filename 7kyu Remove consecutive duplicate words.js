// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// Strings
// Regular Expressions
// Algorithms

const removeConsecutiveDuplicates = s => s.split(' ').filter((el, index, arr) => arr[index] !== arr[index+1]).join(' ');