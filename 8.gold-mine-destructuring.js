const expense = {
    type: 'Business',
    amount: '$45 USD'
};


//traditional
var type = expense.type;
var amount = expense.amount;

//ES6
const { type, amount } = expense;

console.log(type);
console.log(amount);


//examples

var savedFiled = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

//traditional
/*
function fileSummary(file){
    
    return `The file ${file.name}.${file.exstension} is of size ${file.savedFiled}`;    
}
*/

function fileSummary({ name, extension, size }) {

    return `The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFiled));

//another example 

const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [name, name2, name3] = companies;
const [firstName, ...rest] = companies;

console.log(name);
console.log(name2);
console.log(name3);
console.log(firstName, rest);

//destructuring of properties use { } 
//destructuring of elements use [ ]

//destructuring arrays and objects at the same time
const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Mountain View' },
    { name: 'Uber', location: 'San Francisco' }
];

const [{ location }] = companies;
console.log(location);

//another example
const Google = {
    locations: ['Mountain View', 'New York', 'London']
};

const { locations: [location] } = Google;

console.log(location);

//another example 2

//traditional so many params
/*
function signup(username, password, email, dateOfBirth, city){
    //create new user
}

signup('nyName', 'myPassword', 'myemail@example.com', '1/1/1990', 'New York');
*/

//ES6 - the order its overrated :v
function signup({ email, password, dateOfBirth, city, username }) {
    //create new user
}

const user = {
    username: 'myName',
    password: 'myPassword',
    email: 'myEmail@example.com',
    dateOfBirth: '1/1/1900',
    city: 'NewYork'
};

signup(user);

//another example 3
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

//we need transform de points from array of arrays to array of objects with x and y properties.

//ES6
points.map(([x, y]) => {
    return { x, y }
});

//examples

//a
const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

function isEngineer({ title, department }) {

    return title === 'Engineer' && department === 'Engineering';
}

//b
const classes = [
    ['Chemistry', '9AM', 'Mr. Darnick'],
    ['Physics', '10:15AM', 'Mrs. Lithun'],
    ['Math', '11:30AM', 'Mrs. Vitalis']
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return { subject, time, teacher };
});

//c 
const numbers = [1, 2, 3];

function double( [ number, ...rest ] ) {
 return number === undefined ? [] : [number * 2, ...double(rest)];
}