/*
    Traditional
*/

var colors = [ 'red', 'blue', 'green' ];

for(var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

/************
	forEach
*************/

colors.forEach(function(color) { 
  console.log(color);
});
      
//example      
var numbers = [1,2,3,4,5];
var sum = 0;

//Iterator function
function adder(number){
	sum += number;
}

numbers.forEach(adder);

console.log(sum);

//examples

    //a
    var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
    ];
    var areas = [];

    images.forEach(function(image) {
        areas.push(image.height * image.width);
    });

    //b
    function handlePosts() {
        var posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
        ];

        posts.forEach(function(post) {
        savePost(post);  
        });
        
    }

//-----------------------------------------------------------------------//

var numbers = [1,2,3];
var doubledNumbers = [];

/*
    Traditional
*/

for(var i = 0; i < numbers.length; i++){
	doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);

/*********
	map
**********/

var doubled = numbers.map(function(number){
  return number * 2;
})

console.log(doubled);

//example
var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
];

var prices = cars.map(function(car) {
	return car.price;
});

console.log(prices);

//examples

    //a
    var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
    ];

    var heights = images.map(function(image) {
        return image.height;
    });    

    //b
    var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
    ];

    var speeds = trips.map(function(trip) {
        return trip.distance / trip.time;
    });    

    //c
    function pluck(array, property) {
        return array.map(function(res) {
            return res[property];
        });
    }    

//-----------------------------------------------------------------------//

var products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' }
];

var filteredProducts = [];

/*
    Traditional
*/

for (var i = 0; i < products.length; i++) {
	if(products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

/***************
	filter
****************/

var filteredFruits = products.filter(function(product) {
	return product.type === 'fruit';
});

console.log(filteredFruits);

//example 1

var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

//Type is vegetable, quatity is greater than 0, price is less than 10

var filteredCriteria = products.filter(function(products) {
    return product.type === 'vegetable' 
        && product.quantity > 0 
        && product.price < 10;
});

console.log(filteredCriteria);

//example 2

var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' },
];

function commentsForPost(post, comments){
	return comments.filter(function(comment){
  	return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments));

//examples

    //a
    var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

    var filteredNumbers = numbers.filter(function(number){
        return number > 50;
    });    

    //b
    var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
    ];

    var filteredUsers = users.filter(function(user) {
        return user.admin;
    });

    //c
    function reject(array, iteratorFunction) {
    return array.filter(function (el) {
        return !iteratorFunction(el);
    });
    }        

//-----------------------------------------------------------------------//

var users = [
    { name: 'Chilly' },
    { name: 'Willy' },
    { name: 'Billy' }
];

var user;
/*
    Traditional
*/
for (var i = 0; i < users.length; i++) {
    if(users[i].name === 'Willy'){
        user = users[i];
        break;
    }
}
console.log(user);

/***************
	  find
****************/

var userWilly = users.find(function(user){
    return user.name === 'Willy';
});

console.log(userWilly);

//example 1
function Car(model){
    this.model = model;
}
var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];
cars.find(function(car) {
    return car.model === 'Focus';
});

//example 2
var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
];

var comment = { postId: 1, content: 'Great Post' }; 

function postForComment(posts, comments){
    return post.find(function(post) {
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts, comment))

//examples

    //a
    var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
    ];

    var admin = users.find(function(user) {
        return user.admin;
    });    

    //b
    var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
    ];

    var account = accounts.find(function(account){
        return account.balance === 12;
    });    

    //c
    function findWhere(array, criteria) {
        return array.find(function(el) {
            return el[Object.keys(criteria)[0]] === criteria[Object.keys(criteria)[0]];
        });
    }