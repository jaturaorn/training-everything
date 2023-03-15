// // // //Array type
// // // let selectedFruits = ['apple', 'banana', 'orange'];
// // // selectedFruits [3]  = 'pineapple';//add
// // // selectedFruits [4] = 5;//add
// // // selectedFruits [1] = 'pear';//add
// // // console.log(selectedFruits[1]); //acess
// // // console.log(selectedFruits.length); //length

// // // //OBJECT type (key, value)
// // // let user = { //this obj
// // //     firstname: 'F',//key:,value
// // //     lastname: 'G',
// // //     email: 'test@test.com',
// // //     age: 26,
// // //     location: 'bangkok',
// // //     readlist:['html','css','javascript']
// // // }

// // // console.log(user);
// // // console.log(user.email);
// // // user.age = 60;
// // // console.log(user.age);
// // // console.log(user.readlist.length-1); //length

// // //chaging data type
// // // let x = 123;
// // x = 'F';
// // console.log(x);
// // console.log(typeof x); //type of

// // let number = twenty;
// // console.log(number);

// let number = [3,4,3,7,6,3];
// // console.log(number);
// // //end
// // number.push(5,6);
// // console.log(number);
// // //begining
// // number.unshift(1,2);
// // console.log(number);
// // //middle
// // number.splice(2,0,'a','b');
// // console.log(number);
// //removed at end
// // const last = number.pop();
// // number.pop();
// // console.log(number);
// //removefirst
// // const removefirst = number.shift();
// // console.log(removefirst);
// // console.log(number);
// //removed at middle
// // const last = number.splice(1,1);
// // console.log(last);
// // console.log(number);
// // let anthoearray = number;
// // console.log(anthoearray);
// // number = [];
// // console.log(number);
// // console.log(anthoearray);
// // number.length = 0;
// // console.log(number);
// // console.log(number.indexOf('a'));
// // console.log(number.lastIndexOf(3));
// // console.log(number.lastIndexOf('go'));
// // console.log(number.lastIndexOf('go') === -1);
// // console.log(number.indexOf(3,3));
// const first = [1,2,3];
// const second = [4,5,6];

// const combined = [...first,...second];
// console.log(combined);

// // const combined = second.concat(first);
// // console.log(combined);

const number = [2,3,1];
number.sort();
console.log(number);

number.reverse();
console.log(number);