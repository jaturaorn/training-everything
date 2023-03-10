//Array type
let selectedFruits = ['apple', 'banana', 'orange'];
selectedFruits [3]  = 'pineapple';//add
selectedFruits [4] = 5;//add
selectedFruits [1] = 'pear';//add
console.log(selectedFruits[1]); //acess
console.log(selectedFruits.length); //length

//OBJECT type (key, value)
let user = { //this obj
    firstname: 'F',//key:,value
    lastname: 'G',
    email: 'test@test.com',
    age: 26,
    location: 'bangkok',
    readlist:['html','css','javascript']
}

console.log(user);
console.log(user.email);
user.age = 60;
console.log(user.age);
console.log(user.readlist.length-1); //length