// *** Ignore the following lines ***
import chalk from "chalk";
import prompt from "prompt-sync";
// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({ sigint: true });

// ############## Exercise 1 ####################################
function runExerciseOne() {

    const firstName: string = "Mass";
    const lastName: string = "Mbye";

    console.log(`Hello ${firstName} ${lastName} I am glad to inform you that you are the test subject of my very first assignment`);

}

// ############## Exercise 2 Greeting ####################################
function runExerciseTwo() {

    const firstName: string = readLine("Enter your First Name: ")
    const lastName: string = readLine("Enter your Last Name: ")
    console.log(`Hello ${firstName} ${lastName}! Have a nice day!`);

}

// ############## Exercise 3 Decimal point numbers ####################################
function runExerciseThree() {

    const num1: number = 2;
    const num2: number = 26.8;

    const result: number =  num2 / num1;

    console.log(`The Result is : ${result}`);
}

// ############## Exercise 4 Circle and Sphere  Area ###############################
function runExerciseFour() {

    const radius: number = parseInt(readLine("Enter Value of a radius: "));
    const circleArea: number = Math.PI * Math.pow(radius, 2);
    console.log(`Area of the circle is: ${circleArea}`);

    const sphereArea: number = 4 * Math.PI * Math.pow(radius, 2);
    console.log(`Area of the Sphere is: ${sphereArea}`);

}   

// ############## Exercise 5 Consecutive and Non Censecutive ########################
function runExerciseFive() {
    const inputNum1: number = parseInt(readLine("Enter first number: "));
    const inputNum2: number = parseInt(readLine("Enter second number: "));

    if (inputNum1 + 1 === inputNum2) {
        console.log(`${inputNum1} and ${inputNum2} are Consecutive`)
    } else {
        console.log(`${inputNum1} and ${inputNum2} are not consecutive`)
    }
}

// ############## Exercise 6 Odd or Even ####################################
function runExerciseSix() {
    const userNum1: number = parseInt(readLine("Enter any number: "));

    if (userNum1 % 2 === 0) {
        console.log(`Number ${userNum1} is even`)
    } else {
        console.log(`Number ${userNum1} is odd`)
    }
}

// ############## Exercise 7 Body Temperature ####################################
function runExerciseSeven() {
    const bodyTemp: number = parseInt(readLine("Enter your body temperature in celsius: "));

    if (bodyTemp <= 37 ) {
        console.log(`You have a normal body temperature:  (${bodyTemp}) degree celsius`);
    } else {
        console.log(`Your body temperature is high:  (${bodyTemp}) degree celsius`);
    }
}

// ############## Exercise 8 Grade Check ####################################
function runExerciseEight() {
    const userGrade: string = readLine("Enter your grade plaese: ").toUpperCase();

    if (userGrade  === "A" ) {
        console.log(`Your grade (${userGrade}) is:  Excellent Performance!`);
    } else if (userGrade  === "A") {
        console.log(`Your grade (${userGrade}) is:  Very Good Performance!`);
    } else if (userGrade  === "B") {
        console.log(`Your grade (${userGrade}) is:  Good Performance!`);
    }else if (userGrade  === "C") {
        console.log(`Your grade (${userGrade}) is:  Satisfactory performance!`);
    }else if (userGrade  === "D") {
        console.log(`Your grade (${userGrade}) is:  Less than satisfactory performance!`);
    }else if (userGrade  === "E") {
        console.log(`Your grade (${userGrade}), You just made it!`);
    }
}

// ############## Exercise 9  Palindrome ####################################
function runExerciseNine() {
    let userInput: string = readLine("Enter your grade plaese: ").toLowerCase();
    let palindrome: string = userInput.split("").reverse().join("").toLowerCase();
    // console.log(palindrome);

    if (userInput === palindrome) {
        console.log(`${userInput}: is a Palindrome`);
    } else {
        console.log(`${userInput}: is not a Palindrom`);
    }
}

// ############## Exercise 10 ####################################
function runExerciseTen() {

}

/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
  try {
    const assignmentChoice = parseInt(
      readLine("Enter assignment number (ctrl + C or -1 to exit): ")
    );
    console.log();
    switch (assignmentChoice) {
      case 1:
        runExerciseOne();
        break;
      case 2:
        runExerciseTwo();
        break;
      case 3:
        runExerciseThree();
        break;
      case 4:
        runExerciseFour();
        break;
      case 5:
        runExerciseFive();
        break;
      case 6:
        runExerciseSix();
        break;
      case 7:
        runExerciseSeven();
        break;
      case 8:
        runExerciseEight();
        break;
      case 9:
        runExerciseNine();
        break;
      case 10:
        runExerciseTen();
        break;

      /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
      case -1:
        keepAlive = false;
        break;
      default:
        console.log(chalk.red("That is not a valid assignment number!"));
        break;
    }
    if (assignmentChoice !== -1) {
      console.log();
      readLine(chalk.dim("Press enter to continue..."));
      console.clear();
    } else {
      console.log(chalk.green("Exiting..."));
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
}
