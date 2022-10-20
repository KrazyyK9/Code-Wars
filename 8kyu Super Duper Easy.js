// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
// Fundamentals


function problem(x){
    if(x === "" || isNaN(x)){
      return "Error"
    }else{
      return (x*50)+6
    }
  }

  //OR

//   function problem(x){
//     return typeof x === "number" ? x * 50 + 6 : "Error";
//   }