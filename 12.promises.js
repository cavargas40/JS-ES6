//Terminology Promises

//States of promises
//unresolved or pending: waiting for something for finish.
//resolved: something finished and it all went ok.     -> then
//rejected: something finished and something went bad. -> catch

let promise = new Promise((resolve, reject) => {
    //resolve();
    //reject();    
    // setTimeout(() => {
    //     resolve();
    // }, 3000);

    var request = new XMLHttpRequest();
    //make request
    request.onload = () => {
        resolve();
    };
});

promise
    .then(() => console.log('finally finished!'))
    .then(() => console.log('i was also ran!!!'))
    .catch(() => console.log('uh oh!!'));


const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('BAD', err));


