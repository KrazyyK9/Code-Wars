// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}

// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

// Note: The output array should be sorted alphabetically by key name.

// Good Luck!
// Arrays
// Lists
// Fundamentals

const convertHashToArray = (hash) => Object.entries(hash).sort();