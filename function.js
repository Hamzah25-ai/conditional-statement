// calculate circumference of a circle
// using arrow fuction calculate the (volume of a cylinder pier2h).
// perform multiplication of two numbers using form expressiom
// usinhg function expression, create a variable called mySchoolNameand make it equal to your school name at least 30 characters long


function circumferenceOfCircle(r) {
  return 2 * Math.PI * r;
}
console.log("circumference of circle = ", (Math.round(circumferenceOfCircle(3))));

const volumeOfACylinder = (h, r) => {
  return Math.PI * r * r * h
 }
 console.log("volume of cylinder = ", (Math.round(volumeOfACylinder(4, 3))));

const multiplicationOfNumber = function() {
  return 65 * 76
}
console.log("multiplicationOfNumber = ", (multiplicationOfNumber()));

mySchoolName = function(){
  mySchoolName = Command
  return mySchoolName .length > 30
}
? console.log("my school has a short name")
: console.log("my school has a long name");