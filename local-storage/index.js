// store data in local storage
// window.localStorage. window object is global object, therefore we can get 'localstorage' directly typing in console. 

// localStorage.setItem('name', 'Kale Khatiwada');
// localStorage.setItem('Age', 31)

/*
// get data from local storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('Age');
console.log(name, age);


// updata data. setItem() again will update item. If property name & age exist update that if not it creates new one. 
localStorage.setItem('name', 'Puche Khatiwada');
localStorage.setItem('Age', 32)

// we can use '.' dot notation to update
localStorage.name = 'Brett Gerstener';
localStorage.Age = 36;
console.log(name, age);

// delete item
localStorage.removeItem('Age'); // remove proprety 'name'
localStorage.clear(); // remove all

*/

// First step take data turn inot JSON string
const todoList = [
  { text: 'Buy Milk', whoDoes: 'Kali Sharma' },
  { text: 'Create Web Site', whoDoes: 'Bal Sharma' },
  { text: 'Operate Patient', whoDoes: 'Puche Khatiwada' },
  { text: 'Roll Financial Plan', whoDoes: 'Kale Khatiwada' }
]

// easy as below
// console.log(JSON.stringify(todoList))
// localStorage.setItem('todos', JSON.stringify(todoList));

let dataBack = localStorage.getItem('todos');
console.log(dataBack);  // this is still in string format, we havenot done anything. 
dataBack = JSON.parse(localStorage.getItem('todos'))

console.log(dataBack); 