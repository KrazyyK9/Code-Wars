// There exists a sequence of numbers that follows the pattern

//           1
//          11
//          21
//         1211
//        111221
//        312211
//       13112221
//      1113213211
//           .
//           .
//           .

// Starting with "1" the following lines are produced by "saying what you see", so that line two is "one one", line three is "two one(s)", line four is "one two one one".

// Write a function that given a starting value as a string, returns the appropriate sequence as a list. The starting value can have any number of digits. The termination condition is a defined by the maximum number of iterations, also supplied as an argument.

// function lookAndSay(data, len, counter = 0, answerArray = []){
//     // if length is equal to counter, return answer array
//     if (counter === len) return answerArray
    
//     // create values for answer array and push them to answer array
//     let nums = data.split('')
//     let count = 1
//     let workingArray = []
    
//     for (let i = 0; i < nums.length; i++){
//       if (nums[i] !== nums[i+1]){
//         workingArray.push(String(count))
//         workingArray.push(String(nums[i]))
//         count = 1
//       } else {
//         count++
//       }
//     }
  
//     //join the string of numbers into one number and push it to the answer array
//     answerArray.push([workingArray.join('')]);
  
//     // recursive function call to run function against new data. Increment counter in function call
//     return lookAndSay(data = answerArray.slice(-1).toString(), len, counter+1, answerArray)
    
//   }


  //Simple solution:

function lookAndSay(data,len, arr=[]){  
  
    if(len==0) {
      return arr
    }
    
    let count = 1;
    let newStr = '';
    
    for(let i=0; i<data.length; i++) {
      if(data[i] == data[i+1]) 
      {
        count++;
      }
      else 
      {
        newStr+= count + data[i];
        count = 1;
      }
    }
    
    arr.push(newStr)
    
    return lookAndSay(newStr, len-1, arr) 
  }