// Math geeks and computer nerds love to anthropomorphize numbers and assign emotions and personalities to them. Thus there is defined the concept of a "happy" number. A happy number is defined as an integer in which the following sequence ends with the number 1.

//     Start with the number itself.
//     Calculate the sum of the square of each individual digit.
//     If the sum is equal to 1, then the number is happy. If the sum is not equal to 1, then repeat steps 1 and 2. A number is considered unhappy once the same number occurs multiple times in a sequence because this means there is a loop and it will never reach 1.

// For example, the number 7 is a "happy" number:

// 72 = 49 --> 42 + 92 = 97 --> 92 + 72 = 130 --> 12 + 32 + 02 = 10 --> 12 + 02 = 1

// Once the sequence reaches the number 1, it will stay there forever since 12 = 1

// On the other hand, the number 6 is not a happy number as the sequence that is generated is the following: 6, 36, 45, 41, 17, 50, 25, 29, 85, 89, 145, 42, 20, 4, 16, 37, 58, 89

// Once the same number occurs twice in the sequence, the sequence is guaranteed to go on infinitely, never hitting the number 1, since it repeat this cycle.

// Your task is to write a program which will print a list of all happy numbers between 1 and x (both inclusive), where:

// 2 <= x <= 10000

//P: Single number as input
//R: Array of numbers that are "happy" between 1 and x. Stop recursive function when a number is repeated in the array
//E: Happy numbers are numbers that sum to equal 1. For example, the number 7 is a "happy" number: 72 = 49 --> 42 + 92 = 97 --> 92 + 72 = 130 --> 12 + 32 + 02 = 10 --> 12 + 02 = 1
//Pse:


function happyNumbers(x){
    //create answer arr
    let arr = []
    
    //loop through each number of x
    for (let i = 1; i <= x; i++){
      //call helper function. If number is happy push it to answer array
      if(isHappy(i)) arr.push(i)
    }
    
    //return array
    return arr;
  }
  
  
  function isHappy(n) {
    //loop through each number of n
    for (let i = 0; i < n; i++){
      //turn n into a string, split and and use reduce to add the number squared
      n=n.toString().split('').reduce((a,b)=>a+(b*b),0)
    }
    //return true if n is equal to 1. Happy number found
    return n===1
  }


  //RECURSIVE works on smaller numbers

  //P: Single number as input
//R: Array of numbers that are "happy" between 1 and x. Stop recursive function when a number is repeated in the array
//E: Happy numbers are numbers that sum to equal 1. For example, the number 7 is a "happy" number: 72 = 49 --> 42 + 92 = 97 --> 92 + 72 = 130 --> 12 + 32 + 02 = 10 --> 12 + 02 = 1
//Pse:

//[...Array(10+1).keys()].slice(1) 

// //create incrementNumber, happyArr and numHistoryArr as parameters
// function happyNumbers(x, i = 1, numberCheck, happyArr = [], numHistoryArr = []){
//   //base cases:
//   if (x < i) return happyArr;
  
  
//   //take number starting at the beginning of the range and add it to numHistoryArr
//   numberCheck = x - (x-i)
//   numHistoryArr.push(numberCheck)
  
  
//   do{
  
//   //make it a string, split it
//   let squareNumber = numHistoryArr[numHistoryArr.length - 1].toString().split('')
  
//   //create number storage variable to compare against unhappyArr
//   let tempNum = 0
  
//   //convert each element back to number and square it
//   for (let j = 0; j < squareNumber.length; j++){
//     //add numbers together after squaring them into tempNum for comparison against array
//     tempNum += Number(squareNumber[j]**2)
//   }
  
//   //if tempNum equals 1, push it to happyArr. Clear numHistoryArr
//   if (tempNum === 1){
//     happyArr.push(numberCheck)
//     numHistoryArr = []
    
//   } 
//   else {
//     //if duplicate is found, log unhappy number. Clear numHistoryArr
//    if (numHistoryArr.includes(tempNum)){
//      numHistoryArr = []
     
//    } else {
//      //does not exist in numHistoryArr, push it there and run again with numberCheck being the last element of the numHistoryArr
//      numHistoryArr.push(tempNum)
     
     
//    }
//   }
  
// } while(numHistoryArr.length !== 0)
  
  
//   // return recursive call
//   return happyNumbers(x, i+1, numberCheck, happyArr, numHistoryArr)
  
// }