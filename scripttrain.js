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

function Mycar (make, model) {
    return{
        make,model,drive(){
            console.log('dirve');
        }
    }
};

const car1 = new mycar('Funk',240);
console.log(car1);