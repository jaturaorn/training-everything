// const letters = ['a','b','c','d','a','c','a'];
// let count = {};// create an object to keep track
// //count letters
// letters.forEach(letter => {
//     if (count[letter]){
//         count[letter]++;
//     }else {
//         count[letter] = 1;
//     }
//     console.log(count);
// });

// const storeUSD = [5,6,7,8];
// const storeEUR = storeUSD.map(value => value*0.85);

// console.log(storeUSD);
// console.log(storeEUR);

// let storeUSD = [5,6,7,8];

// function toEuro(value) {
//     value *= 0.085;
//     return value;
// }
// let storeEUR = storeUSD.map();

const number = [1,-1,2,3];

const filters = number.filter(n => n > 0);
console.log(filters);