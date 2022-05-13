// Remove the parentheses

// In this kata you are given a string for example:

// "example(unwanted thing)example"

// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// "exampleexample"

// Notes

//     Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
//     There can be multiple parentheses.
//     The parentheses can be nested.

function removeParentheses(s){

    let result = "";
    let count = 0;
    for (let el of s){
      if (el == "(") count += 1;
      if (count == 0) result += el;
      if (el == ")") count -= 1
    }
    return result
  
  }

// function removeParentheses(s){
  
//     while (s.includes("(") ){
//       s = removeElement(s)
//     }
//     return s
//   }
  
//   function removeElement(s){
//     for (let i = 0; i < s.length; i++){
//       if ( s[i] === "(" ){
//         let a = 1;
//         for (let j = i + 1; j < s.length; j++){
//           if ( s[j] === "(" ){
//             a += 1;
//           }
//           if ( s[j] === ")" ){
//             a -= 1;
//           }
//           if ( a === 0 ){
//             s = s.slice(0,i)+s.slice(j+1)
//             break;
//           }
//         }
//       }
//     }
//     return s;
//   }
