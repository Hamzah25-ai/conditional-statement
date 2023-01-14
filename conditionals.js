// const mood = true
// let weak = false

// if (mood) {
//   console.log("I am happy");
// } else ("weak") ;{
//   console.log("i am very weak");
// }

// const mood = true
// let weaklevel = false

// if (mood) {
//   console.log("I am very weak");
// } else (weak) ;{
//   console.log("I need to work");
// }

// let isRaining = "i am not going to school";
// switch (isRaining) {
//   case "It is not raining":
//     console.log("i can play outdoor");
//     break;
//     case "It is not raining and sun is at 37C":
//       console.log("i can play outdoor and have some fun");
//       break;
//       case "i am not going to school":
//         console.log("because it is raining heavily");
//         break;
//         case "It is raining":
//           console.log("i can play indoor");
//           break;

//   default:console.log("i am having fun at home");
//     break;
// }

// const mood = "happy";
// const weaklevel = 7;

// if (!mood || weaklevel < 7) {
//   console.log("i am very weak");
// } else {
//   console.log("i need to work");
// }

// create two variabled named mood and weak level assign mood to happy and weaklevel to 7
// make a conditional statement w variable foir the first code block pt=rint out "i am very weak" else "i need to work"

const getPresentHour = new Date().getHours();
console.log(getPresentHour);

switch (getPresentHour) {
  case 13:
    console.log("the time is 13:00");
    break;

  case 14:
    console.log("the time is 14:00");
    break;

  case 15:
    console.log("the time is 15:00");
    break;

  case 16:
    console.log("the time is 16:00");
    break;

  case 17:
    console.log("the time is 17:00");
    break;

  case 18:
    console.log("the time is 18:00");
    break;

  default:
    break;
}

const getPresentMonth = new Date().getMonth();
console.log(getPresentMonth);

switch (getPresentMonth) {
  case 0:
    console.log("january");
    break;

  case 1:
    console.log("february");
    break;

  case 2:
    console.log("march");
    break;

  case 3:
    console.log("april");
    break;

  case 4:
    console.log("may");
    break;

  case 5:
    console.log("june");
    break;

  case 6:
    console.log("july");
    break;

  default:
    break;
}

let availableStudentScore = 101;
let studentScore = Math.random() * availableStudentScore;
let finalStudentScore = Math.floor(studentScore);
console.log(studentScore);
console.log(finalStudentScore);

switch (true) {
  case finalStudentScore <= 100 && finalStudentScore >= 75:
    console.log("You scored grade A");
    break;
  case finalStudentScore <= 74 && finalStudentScore >= 65:
    console.log("You scored grade B");
    break;
  case finalStudentScore <= 64 && finalStudentScore >= 55:
    console.log("You scored grade C");
    break;
  case finalStudentScore <= 54 && finalStudentScore >= 45:
    console.log("You scored grade D");
    break;
  case finalStudentScore <= 44 && finalStudentScore >= 39:
    console.log("You scored grade E");
    break;
  case finalStudentScore <= 38 && finalStudentScore >= 29:
    console.log("You scored grade F");
    break;

  default:
    console.log("You failed woefully");
    break;
}