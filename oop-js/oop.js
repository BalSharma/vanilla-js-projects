// class
// Prototype model original way of doing thing
// Release of ES6 it can be done by class. It is syntactic sugar uses same 
// prototype model

/*
class User {
  constructor(name, email) {
    // set up properties
    this.userName = name;
    this.userEmail = email;
    this.score = 0;
  }
  // arrow function doesn't bind to 'this'. ES6 shorthand notation 
  // function is a regular function. 
  login() {
    console.log(`${this.userName} just logged in.
    Email is: ${this.userEmail}`)
    return this;
  }

  logout() {
    console.log(`${this.userName} logged out.`);
    return this;
  }

  increaseScore() {
    this.score += 1;
    console.log(`${this.userName} has score of ${this.score}`);
    return this;
  }
} */

// uppercase name convention for constructor function
function User(name, email) {
  // inside function we set name, email. When we say new User() it is doing exactly the same. First it creates new blank {} empty object. Then it binds value of 'this' to that new empty object. After this it calls function to create object. Therefore, class is just like this regular fuction taking parameters calls the function. This is kind of code lives as an abstraction of class under the hood. This is how we wrote code before class keyword came out. This way inside constructor we add properties & functions.
  this.userName = name;
  this.userEmail = email;
  this.score = 0;

  // this.login = function () {
  //   console.log(`${this.userName} has logged in.`);
  // }
}

User.prototype.login = function () {
  console.log(`${this.userName} has logged in.`);
  return this;
}
User.prototype.logout = function () {
  console.log(`${this.userName} logged out.`);
  return this;
}

User.prototype.increaseScore = function () {
  this.score += 1;
  console.log(`${this.userName} has score of ${this.score}`);
  return this;
}

// the new keyword
// 1 - It creates a new empty object {}
// 2 - It binds value of 'this' to the new empty object
// 3 - It calls constructor function to 'build' the object

const userOne = new User('Nepal', 'nepal@gmail.com');
// console.log(userOne)
// console.log(userOne.login())
// console.log(userOne.logout())

// Below would not work because login() run first & it is not returning anything. When a method doesn't return explicitly anything in javascript it is undefined. logout() is being called on top of undefined, so it will not work. We need to return a value, to work. So return 'this' object itself that refers object instance. 

// method chaining ()
// userOne.login().increaseScore().increaseScore().logout();

const userTwo = new User('Hari Bol', 'hari@gmail.com');

/*
// Extending, Inheritence
class Admin extends User {
  // only admin have following:
  // If we want additional property only to admin, they will not be available to
  // User.  We need to define or must have our own constructor inside admin class. That is the place where properties are defined inside a class.  
  constructor(name, email, title) {
    // once we have constructor in sub-class it runs first. Super class constructor runs only if child does not have constructor. Question is how to attach parent userName and userEmail. We ask to run parent constructor. When we call a super inside child constructor it looks for a parent class constructor. 
    super(name, email);
    this.customTitle = title;
  }
  deleteUser(user) {
    users = users.filter(u => user.userName !== u.userName);

  }
} */

// Admin has everything from User 
// const adminUser = new Admin('Bal', 'okok@com', 'Developer');
// let users = [userOne, userTwo, adminUser];
// adminUser.login().increaseScore().increaseScore().logout();
// console.log(users);
// adminUser.deleteUser(userOne);
// console.log(adminUser);
// userTwo.deleteUser(userOne);


//  prototypical function implementation
console.log(userOne, userTwo);


userOne.login().increaseScore().increaseScore().logout();
userTwo.login().increaseScore().logout();

// prototypical inheritence for admin user

function Admin(name, email, title) {
  // how to call User & add title property. there is a super() function calling in
  // class way. We do not have super function () in constructor function, we need to call User constructor up here. User.call method calls User constructor with the context of 'this' Admin object. So name & email refers to Admin object not for User object. It is doing samething as we used super() in class.
  User.call(this, name, email);
  this.customTitle = title;
}

const adminUser = new Admin('Bal Sharma', 'aa@gmail.com', 'Developer');
console.log(adminUser);

let users = [userOne, userTwo, adminUser];
// Object.create() pass User.prototype to attach Admin.prototype. Now we have access to Admin. 
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
  // users = users.filter(u => user.userName !== u.userName);
  // return users;
}
adminUser.login().increaseScore().increaseScore().logout();
// adminUser.deleteUser(userTwo);
// console.log(users);

