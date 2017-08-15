//Traditional
/*
const add = function(a, b){

    return a + b;

}
*/

//ES6
const add = (a, b) => a + b;

console.log(add(1, 2));

//Advanced use of Arrow Functions
const numbers = [1, 2, 3];


//Traditional
numbers.map(function (number) {
    return 2 * number;
});


//ES6
numbers.map(number => 2 * number);