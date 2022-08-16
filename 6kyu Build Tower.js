// Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// Go challenge Build Tower Advanced once you have finished this :)
// Strings
// ASCII Art
// Fundamentals

// Suggest kata description edits

//P: positive integer
//R: array of strings with whitespaces
//E: (towerBuilder(2), [" * ","***"]) || (towerBuilder(3), ["  *  "," *** ","*****"])
//Psuedo:

function towerBuilder(nFloors) {
    //create space, star and arrTower variable
    let space
    let star
    let arrTower = [];
    for (let i = 1; i <= nFloors; i++){
      space = " ".repeat(nFloors - i)
      star = "*".repeat((2*i) - 1)
      arrTower.push(`${space}${star}${space}`)
    }
    
    return arrTower;
    
  }