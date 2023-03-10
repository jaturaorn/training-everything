//String type
let firstname = 'F';
let lastname = 'R';

let Fullname = firstname + ' ' + lastname;
console.log(Fullname);

//Boolean type
let email = 'test@gmail.com';
let findletter = email.includes('e');//.includes = ตรวจเช็ค
console.log(findletter);

//Number type
let radius = 10;
const pi = 3.14;

console.log(radius,pi);

console.log(10/2);
let result = radius % 3;
console.log(result);

//the order of the operations is important - B I D M A S
let bidMas = 5 * (10-3)**2;
console.log(bidMas);

//undefined type
//let age;
//console.log(age);

//null type
let age = null;
console.log(age,age+3,`my age is ${age}`);