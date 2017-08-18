function whichSchool(age) {
  if (age < 13) {
    return ("Elementary School");
      // oh snap, a comment
  } else if (age <= 18) {
   return ("Secondary School");
  } else {
    return ("Lighthouse Labs");
      /* great place for more comments
      here too */
  }
} 

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 18. Which school should I go to?");
console.log(whichSchool(18));