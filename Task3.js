const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 300 },
    { id: 2, title: '1984', author: 'George Orwell', price: 200 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 400 },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', price: 150 },
    { id: 5, title: 'War and Peace', author: 'Leo Tolstoy', price: 600 },
];
// 1.Print all book titles.
// books.forEach((a)=>console.log(`book titles : ${a.title}`));

// 2.Find all books priced above 300.
// books.forEach((a)=>{
//     a.price>300?console.log(` books priced above 300: ${a.price}`):"";
// });
   
// 3.Get a list of authors of books priced below 250.
// books.forEach((a)=>{
//     a.price<250?console.log(` books priced above 250: ${a.price}`):"";
// });
   
// 4.count the total no of book priced above 200
// let count=0;
// books.forEach((a)=>{
//     if (a.price>200) {
//         count+=1;
//     }
// });
// console.log(`Total number of books priced above 200: ${count}`);
   



const cars = [
    { id: 1, model: 'Tesla Model 3', manufacturer: 'Tesla', price: 40000 },
    { id: 2, model: 'Ford Mustang', manufacturer: 'Ford', price: 55000 },
    { id: 3, model: 'Chevrolet Camaro', manufacturer: 'Chevrolet', price: 45000 },
    { id: 4, model: 'Toyota Corolla', manufacturer: 'Toyota', price: 20000 },
    { id: 5, model: 'Honda Civic', manufacturer: 'Honda', price: 25000 },
]
// Print all car models.
// cars.forEach((a)=>console.log(a.model));
// Find all cars priced above 30000.
// books.forEach((a)=>{
//     a.price>3000?console.log(` cars priced above 30000: ${a.price}`):"";
// });
// Get a list of manufacturers of cars priced below 30000.
// cars.forEach((a)=>{
//     a.price<30000?console.log(`list of manufacturers of cars priced below 30000 : ${a.manufacturer}`):"";
// });
// Count the total number of cars manufactured by Tesla.
// let count=cars.filter((a)=>a.manufacturer=="Tesla"?a:"")
// console.log(`total number of cars manufactured by Tesla : ${count.length}`);



const players = [
    { id: 1, name: 'John', sport: 'Basketball', age: 25, score: 30 },
    { id: 2, name: 'Emily', sport: 'Tennis', age: 23, score: 18 },
    { id: 3, name: 'Chris', sport: 'Football', age: 28, score: 12 },
    { id: 4, name: 'Anna', sport: 'Basketball', age: 24, score: 25 },
    { id: 5, name: 'Mike', sport: 'Football', age: 26, score: 15 },
];


// 1. Print all player names.
// players.forEach((a)=>console.log(a.name));


// 2. Find all players who scored above 20.
// players.filter((a)=>a.score>20?console.log(a.name):"")

// 3. Get a list of players who play Basketball.
// console.log(players.filter((a)=>a.sport==="Basketball"?a:""))

// 4. Count the total number of Football players.
// let footPlayers=players.filter((a)=>a.sport==="Football"?a:"");
// console.log(footPlayers.length)

// 5. Find the player with the highest score and print their detail.
// console.log(players.reduce((a,b)=>a["score"]>b["score"]?a:b))