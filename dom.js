const container = document.querySelector("#container");
const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
const heading = document.createElement("h3");
heading.textContent = "I'm a blue h3!";
const mala = document.createElement("div");
const brookside = document.createElement("h1");

brookside.textContent = "I'm in a div";
const chamato = document.createElement("p");
chamato.textContent = "ME TOO!";

mala.appendChild(brookside);
mala.appendChild(chamato);

container.appendChild(paragraph);
container.appendChild(heading);
container.appendChild(mala);

// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
// const person = {
//   firstName: "Ashley",
//   secondName: "Cheneo",
//   age: 30,
//   greet: function () {
//     console.log("Hi");
//   },
//   walk: function () {
//     for (let i = 0; i < 10; i++) {
//       console.log("Step", i);
//     }
//   },
// };

// console.log(person.secondName);
// // this is the dot notation
// console.log(person["firstName"]);
// person.greet();
// person["walk"]();

// for (key in person) {
// }
// function Person(firstName, secondName, age) {
//   this.firstName = firstName;
//   this.secondName = secondName;
//   this.age = age;
//   this.dob = new Date(c);

//   this.greet = function () {
//     console.log("Hi");
//   };
//   this.walk = function () {
//     for (let i = 0; i < 10; i++) {
//       console.log("Step", i);
//     }
//   };
// }
// const person = {
//   firstName: "Ashley",
//   secondName: "Cheneo",
//   age: 30,
//   greet: function () {
//     console.log("Hi");
//   },
//   walk: function () {
//     for (let i = 0; i < 10; i++) {
//       console.log("Step", i);
//     }
//   },
// };

// const trainer = new Person("Omba", "Utafute", 89);
// const student = new Person("Mimi", "Mjinga", 17);
// // for (key in person) {
// // }
// // const trainer = { ...person, role: "Trainer" };
// // const student = { ...person, role: "Student" };
// // trainer.role = "Trainer";
// // student.role = "Student";
// // console.table(person);
// console.table(student);
// console.table(trainer);

// const { firstName, secondName } = person;
// console.log(firstName, secondName);
