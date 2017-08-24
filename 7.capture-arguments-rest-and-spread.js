//Rest operator = ...

//traditional
/*
function addNumber(numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);    
}

console.log(addNumber([1,2,3,4,5]));
*/

//ES6
function addNumber(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

console.log(addNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


//Spread operator = [...someArray, ...SomeOtherArray]

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const myobj = { id: 1, name: 'idk' };

//traditional
console.log(defaultColors.concat(userFavoriteColors));

//ES6
console.log(['blue', ...defaultColors, ...userFavoriteColors, myobj]);

//example

function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }

    return items;

}

console.log(validateShoppingList('oranges', 'bread'));


//another example

const mathLibrary = {
    calculateProduct(...rest) {
        console.log('Please use the multiply method instead');
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }
};

//examples

//a
function product(...numbers) {

    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1)
}

//b
function join(array1, array2) {
    return [...array1, ...array2];
}

//c
function unshift(array, ...params) {
    return [...params, ...array];
}

