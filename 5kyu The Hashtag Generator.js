// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//P: string inputs, validate inputs
//E: "" => false // "#Helloworld"
//R: string with # at the start then a capital letter
//Psu:

function generateHashtag (str) {
    // create array, split the str by spaces and then map and uppercase the second letter. Then join everything together
    let arr = str.split(' ').map(value => value.slice(0,1).toUpperCase()+value.slice(1)).join('')
    
    // if length is greater than 140chars or its empty return false
    if (arr.length > 139 || arr === '') return false
    
    //return arr with # at beginning
    return '#'+arr
    }