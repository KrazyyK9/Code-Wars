// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
// Fundamentals
// Strings

const removeExclamationMarks = (s) =>
  s.split('')
  .filter((x) => !x.includes('!'))
  .join('');

  //OR

  //const removeExclamationMarks = s => s.split('!').join('')