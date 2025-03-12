// // let timeOfDay = 9;
// // let greet;

// // if (timeOfDay < 12) {
// //   console.log("Good morning");
// // } else if (timeOfDay < 13) {
// //   console.log("What will you have for lunch?");
// // } else {
// //   console.log("Good Afternoon");
// // }
// // let i = 0;
// // while (i <= 10) {
// //   console.log(i);
// //   i++;
// // }

// const speedLimit = 220;
// let currentSpped = 0;
// let gear = 1;
// while (currentSpped <= 10) {
//   console.log(`The speed is ${currentSpped}`);
//   currentSpped++;

//   if (currentSpped < 30) {
//     gear = 1;
//   } else if (currentSpped < 60) {
//     gear = 2;
//   }
// }

// SHORTER WHILE LOOP
// const speeddLimit = 1000;
// let currentSpeed = 130;

// while (currentSpeed <= speeddLimit) {
//   // Calculate gear dynamically based on speed
//   let gear = Math.floor(currentSpeed / 30) + 1;

//   console.log(`The speed is ${currentSpeed} km/h, Gear: ${gear}`);

//   currentSpeed++; // Increase speed
// }
// let number = parseInt(prompt("Enter your number:"));

// if (number % 2 === 0) {
//   console.log(number + " is even.");
// } else {
//   console.log(number + " is odd.");
// }

// let number2 = parseInt(prompt("Enter your number:"));

// if (number2 < 0) {
//   console.log(number2 + " is negative.");
// } else if (number2 > 0) {
//   console.log(number2 + "is positive.");
// } else {
//   console.log(number2 + "is a zero.");
// }
// console.log(number2 + " is positive.");

//       if (num > 0) {
//         console.log("The number is positive.");
//     } else if (num < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// }

// 2.
// let number3 = parseInt(prompt("Enter your number:"));

// // Check if the input is not a number
// if (isNaN(number3)) {
//   console.log("Invalid input! Please enter a valid number.");
// } else if (number3 < 0) {
//   console.log(number3 + " is negative.");
// } else if (number3 > 0) {
//   console.log(number3 + " is positive.");
// } else {
//   console.log(number3 + " is zero.");
// }

// 3;
// let age = parseInt(prompt("Please enter your age:"));
// if (isNaN(age)) {
//   console.log("Please enter a valid age.");
// } else if (age < 18) {
//   console.log("You are not eligible to vote.");
// } else {
//   console.log("You are eligible to vote.");
// }
// 4.
// let score = parseInt(prompt("Please enter your score."));
// if (isNaN(score)) {
//   console.log("Please enter a valid score.");
// } else if (score < 50) {
//   console.log("You have failed.");
// } else {
//   console.log("You have passed!");
// }
// 5;
// let num1 = parseInt(prompt("Enter number 1."));
// let num2 = parseInt(prompt("Enter number 2"));

// if (isNaN(num1) || isNaN(num2)) {
//   console.log("Please enter valid numbers.");
// } else if (num1 > num2) {
//   console.log(num1 + " is greater thanv" + num2);
// } else console.log(num2 + " is greater than " + num1);
// 6.
// let num1 = parseInt(prompt("Enter the first number."));
// let num2 = parseInt(prompt("Enter the second number."));
// let num3 = parseInt(prompt("Enter the third number."));

// THURSDAY CLASS
// FOR LOOP

// let names = "Oscar, Yula, Praise, Victoria";
// console.log(names.length);

// names.toUpperCase()

// for (let i = 0; i <= names.length; i++) {
//   console.log(names.charAt(i));
// }

// FUNCTIONS block of statement used to perform a particular task
// Defined using the keyword function
// 1.Functions without names are called anonymous functions
// For example

// function(){

// }

// 2. There are also arrow functions
// ()=>{}

// 3. There are also named functions

// function doSth(){

// }

// 4. You can also define a function as a declaration

// const getName = function(){}

// Functions are defined differently because they serve different purposes.

let percentage = parseInt(prompt("Enter the percentage."));
function gradeCalculator(labScore, attendance, project) {
  let percentage = 100;
  if (percentage >= 90 && percentage <= 100) {
    console.log("A");
  } else if (percentage >= 80) {
    console.log("B");
  } else if (percentage >= 70) {
    console.log("C");
  } else if (percentage >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
  return "A";
}
gradeCalculator(100);
