// 100th Kata

// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

// 'Hello World'

// would give:

// Words in your solution should be left-aligned.
// Fundamentals
// Strings
// Arrays

// Suggest kata description edits

//P: a string
//R: a string with the letters written backwards and the frame of the word in *'s
//E: ('Hello World'), '*********\n* olleH *\n* dlroW *\n*********'
//Psuedo:


function mirror(text){
    //take text and split it
    let words = text.split(' ') //come back and try to break it
  
    
    //find the width of the frame
    let width = Math.max(...words.map(w => w.length))
  
    
    //with the width, create the frame
    let frame = '*'.repeat(width + 4)
  
    
    //reverse the word(s)
    let reverseWords = words.map(w => `* ${Array.from(w).reverse().join('')}${' '.repeat(width - w.length)} *`).join('\n');
    
    //return
    return (`${frame}\n${reverseWords}\n${frame}`)
  }