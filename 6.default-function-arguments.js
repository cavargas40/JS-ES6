/*traditional*/
/*
function makeAjaxRequest(url, method){
  if(!method){
  	method = 'GET';
  }
	//logic to make the request
  
  return method;
}
*/

/* ES6 */
function makeAjaxRequest(url, method = 'GET') {
    //logic to make the request  
    return method;
}

console.log(makeAjaxRequest('lloronas.com'));
console.log(makeAjaxRequest('pornhub.com', 'GET'));

//example


//traditional
/*
function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 999999;
}

function createAdminUser(user){
    user.admin = true;

    return user;
}

createAdminUser(new User(generateId()));
*/

//ES6
function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) {
    user.admin = true;

    return user;
}

const user = new User(generateId());

createAdminUser(user);
createAdminUser();

//examples

//a
function sum(a = 0, b = 0) {

    return a + b;
}

//b
function addOffset(style = {}) {
    style.offset = '10px';
    
    return style;
  }
