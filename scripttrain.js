// let Mycar = {
//     make: 'Benz',
//     model: 'E220',
//     year: 2010
//     drive: function({
//         console.log('drive car');
//     })
// };

// console.log(Mycar);
// console.log(Mycar.make);
// console.log(Mycar.model);

// let car = new Object();
// car.make = 'Folk';
// car.model = 'E240';

// function Mycar (make, model) {
//     return{
//         make,model,drive(){
//             console.log('dirve');
//         }
//     }
// };

// const car1 = new mycar('Funk',240);
// console.log(car1);

// let Car = function(make,model,year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.drive = function(name){
//         console.log(`${name} is drive car`);
//     }
// };
// let car1 = new Car('Flok','E250',2006);
// console.log(car1);
// console.log(car1.drive('Jackson'));

let Pig = function(namep,yearp,location){
    this.namep = namep;
    this.yearp = yearp;
    this.location = location;
    this.Cut = function(nameB){
        console.log(`${nameB} is Cut pig`);
    }
};

let butcer = new Pig('COCO',5,'Brazill');
console.log(butcer);
butcer.Cut('Mozert');