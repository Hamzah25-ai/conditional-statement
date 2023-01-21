let userName = "jane";
userName ? console.log("hello " + userName) : console.log("");

const userQuestion = "Will I become a werewolf tonight?";
console.log(`Jane asked: ${userQuestion}`);

const randomNumber = Math.random() * 8;
let finalStudentScore = Math.floor(randomNumber);
console.log(finalStudentScore);

switch (finalStudentScore) {
  case 0:
    console.log("it is certain");
    break;
  case 1:
    console.log("it is decidedly so");
    break;
  case 2:
    console.log("Reply hazy try again");
    break;
  case 3:
    console.log("cannot predict now");
    break;
  case 4:
    console.log("do not count on it");
    break;
  case 5:
    console.log("my sources say no");
    break;
  case 6:
    console.log("outlook not so good");
    break;
  case 7:
    console.log("signs point to yes");
    break;

  default:
    // console.log(`The eight ball answered: ${randomNumber}`);

    break;
}