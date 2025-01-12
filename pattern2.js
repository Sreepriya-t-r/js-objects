// que
// let number = 50; 
// let rows = 4; 

// for (let i = 1; i <= rows; i++) {
//   let row = '';
//   for (let j = 0; j < i; j++) {
//     row += number + ' ';
//     number -= 5;
//   }
//   console.log(row.trim());
// }


// que
let n = 7; 
// for (let i = 0; i < n; i++) {
//   let row = '';
//   for (let j = 0; j < n; j++) {
//     if (i === j || i + j === n - 1) {
//       row += '*';
//     } else {
//       row += ' ';
//     }
//   }
//   console.log(row);
// }


// que

for (let row = 5; row >= 1; row--) {
    let str = "";
    for (let col = 1; col <= row; col++) {
        str += "*";
    }
    console.log(str);
}