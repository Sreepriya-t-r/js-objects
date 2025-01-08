
 const products = [
    { pid: 100, pName: 'Apple', brand: '5G', price: 120000, display: 'OLED' },
    { pid: 101, pName: 'Samsung', brand: '4G', price: 90000, display: 'AMOLED' },
    { pid: 102, pName: 'OnePlus', brand: '4G', price: 75000, display: 'Fluid AMOLED' },
    { pid: 103, pName: 'Pixel', brand: '3G', price: 85000, display: 'OLED' },
    { pid: 104, pName: 'Xiaomi', brand: '3G', price: 40000, display: 'Super AMOLED' }
];

// print product name only
// products.forEach(products=>console.log(products.pName))

// print all mobile details whose display is to OLED.
// let OLED= products.filter((product => product.display==='OLED'));
// console.log(OLED);


// print 3g mobile phone names :
// let name= products.filter((product => product.brand==='3G'));
// name.forEach(products=>console.log(products.pName))

// sort mobile based on price.
// products.sort((a, b)=>a.price-b.price);
// console.log(products);

// print costly mobile price
// const mostExpensive = products.sort((a, b)=>a.price-b.price)[4];
// console.log(mostExpensive.price);

// // print low cost mobile
// const mostExpensive = products.sort((a, b)=>a.price-b.price)[0];
// console.log(mostExpensive.price);

//  Double the values of an object.
// let product={
//     pid: 100,
//     pName: 'Apple',
//     brand: '5G',
//     price: 120000,
//     display: 'OLED'
// };
// Object.keys(product).forEach(key => {
//     if (typeof product[key]==='number') product[key]*=2;
// });
// console.log(product);


// Count the number of properties in an object
// let numberOfProperties = Object.keys(product).length;
// console.log(numberOfProperties);


//  const company = {
//   name: "TechCorp",
//   employees: [
//     { id: 1, name: "Alice", department: "Engineering", salary: 70000 },
//     { id: 2, name: "Bob", department: "Marketing", salary: 50000 },
//     { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
//     { id: 4, name: "Diana", department: "HR", salary: 60000 }
//   ],
//   location: "New York",
//   established: 2010
// };
// How do you find the total salary of all employees in the "Engineering" department?
// let totalSalary = company.employees.filter(employee => employee.department === "Engineering").reduce((sum, employee) => sum + employee.salary,0);
// console.log(totalSalary);

// display the count of each word
const sentence= "js python js python" 
const words=sentence.split(' ');
let charCount={
};
// words.forEach(word => {
//     output[word]=(output[word]?output[word]+1:1);
//     });
//     console.log(output);

    

// Count the occurrence of each character in a string (ignoring spaces).
for (let char of sentence) {
    if (char !== ' ') {  
        charCount[char]=(charCount[char]?charCount[char]+1 :1);
    }
}
console.log(charCount);
//  Use Object.entries() to iterate through an object and log each key-value pair.

//  Create an  object and disply its keys, values seperatly
//  Write a program that takes an array of objects and a property name, and returns the first object where the property exists