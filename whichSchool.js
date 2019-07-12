var school = "Elementary";
const whichSchool  = function (age) {
  if (age < 13) {
    school = 'Elementary School';
    return school;
  } else if (age < 19) {
    school = 'Secondary School';
    return school;
  } else if (age >= 19){
    school = 'Lighthouse Labs';
    return school;
  } else {
    school = 'Undefined School Age';
    return school;
  } // Your code in here ...
}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));