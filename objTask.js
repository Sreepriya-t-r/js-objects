//  Check if a key exist before deleting it.
// let student={
//     name:"Athul",
//     studentId:20,
//     age:21,
//     grade:"A"
// }
// console.log(student.hasOwnProperty("age"));
// delete student.age;
// console.log(student);

 
//  Extract name and age from a person object using destructuring.
// let student={
//     name:"Athul",
//     studentId:20,
//     age:21,
//     grade:"A"
// }
// const fullname={fName:"abhijith " ,lName:" A"}
// let {fName,lName}=fullname;
// console.log(fName,lName);
// let {name,age}=student;
// console.log(name,age);


//  Add generation property to the book and update the price property in book
// let book={
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     price: 20,
// }
// book.generation="First Edition";
// book.price = 25;
// console.log(book);


//  Update the age in the Object person
// let person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// person.age = 100;
//  console.log(person);


// Create an  object and  display the values of the object in 3ways.
// let person = {
//   name: "Muhsina",
//   age: 21,
//   place:"Thrissur"
// };
// console.log(Object.values(person));
// console.log(person.name);         
// console.log(person["age"]);       
// console.log(person.place); 



// Destructure age and print
let person = {
  name: "John",
Age:31
};

let {age}=person;
console.log(age);

//  create an object and add new key to it using three methods
//  WAP to check if a specific key exists in the object using:
// The *hasOwnProperty* method
// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
//  add the job of person in the Object person
// let person = {
//   name: "Alan",
//   age: 22,
//   city: "Kerala"
// };
//  Write a JavaScript program that checks if an object has a property address. If it exists, delete it. Otherwise, print a message that the property does not exist.
//  Write a function
// deleteNonStringProperties (ob
// j ) that removes all properties from the object where the value is not a string.
//  let car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2021
// };
//  Add  fuelType to the object