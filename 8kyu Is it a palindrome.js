// Write a function that checks if a given string (case insensitive) is a palindrome.
// Fundamentals

const isPalindrome = x => x.toLowerCase().split('').reverse().join('') === x.toLowerCase() ? true : false;