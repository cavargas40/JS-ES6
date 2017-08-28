// ES6
function* shopping() {
    // stuff on the sidewalk

    // walking down the sidewalk

    // go in to the store with cash
    const stuffFromStore = yield 'cash';

    // walking to laundry place
    const cleanClothes = yield 'laundry';

    //walking back home
    return [stuffFromStore, cleanClothes];
}

// stuff in the store
const gen = shopping();

console.log(gen.next());    //leaving our house
// walked into the store
// walking up and down the aisles..
// purchase our stuff

console.log(gen.next('groceries'));    //leaving yhe store with groceries
console.log(gen.next('clean clothes'));

// example
function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colors();
gen.next(); // { "value": "red", "done": false }
gen.next(); // { "value": "blue", "done": false }
gen.next(); // { "value": "green", "done": false }
gen.next(); // { "done": true }

const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}
console.log(myColors); //['red', 'blue', 'green']

//another example - Delegation Generators
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.tester;
    }
}

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;    
        yield* this.testingTeam;
    }
};

const names = [];
for(let name of engineeringTeam){
    names.push(name);
}

console.log(names); // ['Jill', 'Alex', 'Dave', 'Amanda','Bill'];

//generators with recursion
class Comment{
    constructor(content, children){
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator](){
        yield this.content;
        for(let child of this.children){
            yield* child;
        }
    }
}

const children = [
    new Comment('good Comment', []),
    new Comment('bad comment', []),
    new Comment('meh', [])
];

const tree = new Comment('Great Post', children);

const values = [];
for(let value of tree){
    values.push(value);
}

console.log(values); // ['good Comment','bad comment','meh','Great Post']

