//Traditional
/*
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function(){
    return 'vroom';
}

const car =  new Car({ title: 'Focus' });
console.log(car);
console.log(car.drive());



function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function(){
    return 'vroom';
}

function Toyota(options){    
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function(){
    return 'beep';
};



const toyota = new Toyota({color: 'red', title: 'Daily Driver'});

console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());

*/


//ES6
class Car {
    constructor({ title }) {
        this.title = title;
    }

    drive() {
        return 'vroom';
    }
}

// const car = new Car({ title: 'Toyota' });
// console.log(car);
// console.log(car.drive());


class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }

    honk() {
        return 'beep';
    }
}

const toyota = new Toyota({ title: 'Daily Driver', color: 'red' });
console.log(toyota.honk());
console.log(toyota.drive());
console.log(toyota);

//examples

//a
class Monster {
    constructor(options) {
        this.name = options.name;
        this.health = 100;
    }
}

//b
class Monster {
    constructor(options) {
        this.health = 100;
        this.name = options.name;
    }
}

class Snake extends Monster {

    constructor(options) {
        super(options);
    }


    bite(options) {
        return options.health -= 10;
    }
}


