
function getMessage() {
    const year = new Date().getFullYear();

    //Traditional
    //return 'The year is ' + year;

    //ES6
    return `The year is ${year}`;
}

console.log(getMessage());  

//examples

    //a
    function doubleMessage(number) {
        return `Your number doubled is ${2 * number}`;
    }    


    //b
    function fullName(firstName, lastName) {
        return `${firstName} ${lastName}`;
    }    