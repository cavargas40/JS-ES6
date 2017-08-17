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

//example

//traditional
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function () {
      var self = this;
        return this.members.map(function (member) {
            return `${member} is on team ${self.teamName}`; //makes error
        });
    }
};

console.log(team.teamSummary());

//ES6
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map( (member) => `${member} is on team ${this.teamName}`);
    }   
};

console.log(team.teamSummary());

//examples

    //a
    const fibonacci = (n) => n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

    //b
    const profile = {
        name: 'Alex',
        getName: function (){
            return this.name
        }
    };    