// Write your function here:
let finalGrade = (a, b, c) => {
    let finalGrade = (a + b + c) / 3;
    console.log(finalGrade);
  
  if (a < 0 || a > 100){
    return "You have entered an invalid grade.";
  } else if (b < 0 || b > 100){
    return "You have entered an invalid grade.";
  } else if (c < 0 || c > 100){
    return "You have entered an invalid grade.";
  };
  
  
   if (finalGrade >= 0 && finalGrade <= 59){
    return "F";
  } else if (finalGrade >= 60 && finalGrade <= 69){
    return "D";
  } else if (finalGrade >= 70 && finalGrade <= 79){
    return "C";
  } else if (finalGrade >= 80 && finalGrade <= 89){
    return "B";
  } else if (finalGrade >= 90 && finalGrade <= 100){
    return "A";
   } 
  };
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(101, 56, 95)); // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!