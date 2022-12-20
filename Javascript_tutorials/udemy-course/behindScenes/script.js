'use strict';
//AST example
// const x = 23;

// //Human Readable top-level code
// const name = 'Aparna';
// //This name declaration is clearly a top level code since not inside any function.
// //Function body only executed when called.
// const first = () => {
//   let  a =1;
//   const b = second();
//   a = a + b;
//   return a;
// };

// function second() {
//   var c =2;
//   return c;
// }
// //Scope and scope chain
// //Global scope
// const me = 'Jonas';
// const job = 'teacher';
// const year = 1989;

// //Function Scope
// function calcAge(birthYear) {
//   const now = 2037;
//   const age = now - birthYear;
//   return age;
// }
// console.log(now); //ReferenceError

// //Block Scope{ES6}
// if (year >= 1981 && year <= 1996) {
//   const millenial = true;
//   const food = 'Avocado toast';//eg:if block, for block etc.
// }
// console.log(millenial);//Reference error


//Example 2
// const a = 'Jonas';
// first();

// function first() {
//   const b= 'Hello';
//   second();
  
//   function second(){
//     const c = 'Hi';
//     third();
//   }
// }
// function third(){
//   const d = 'Hey!';
//   console.log(d+ c+ b+ a); //Reference eror
// }
//from example 2 , call stack will look like below 
//third () EC
//d = "Hey!"

//second()EC
//c = "Hi!"

//first()EC
//b = "Hello!"
//second = <function>

//Global EC
//a='Jonas
//first = <function>
//third = <function>
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   // console.log(firstName);
//   function printAge(){
//    const output = `${firstName}, You are ${age}, born in ${birthYear}`
//    console.log(output);

//    if(birthYear >= 1981 && birthYear <= 1996){
//     var millenial = true;
//     const firstName = 'Steven';
//     const str = `oh, and you're a millenial, ${firstName}`;
//     console.log(str);

//     function add(a,b){
//       return a+b;
//     }
   
//    const output = 'NEW OUTPUT!'
//    }
//   //  console.log(str); //Reference error
//   console.log(millenial);//is readable because var is not object scoped, it is function scoped.
//   // console.log(add(2,3));//Reference error since functions are infact blockscoped.
//   console.log(add(2,3)).
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);//Reference error
// // printAge();//reference error
// const myName = 'Jonas';
// if(myName === 'Jonas') {
//   console.log(`Jonas is a ${job}`);
//   const age = 2037 - 1989;
//   console.log(age);
//   const job = 'teacher';
//   console.log(x);
// }
//output will be reference error :cannot access 'job' before initialization.

//Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

//  var me = 'Jonas';
// //from the beginning of the code to till the job variable is declared below, job is in temporal dead zone.
//  let job = 'teacher';
//  const year = 1991;

//Functions
//console.log(addDecl(1,2));//readable 
//console.log(addExpr(2,3));//Reference error since assigned to variable using const.
//console.log(addArrow(2,5));//Reference error since assigned to variable using const.
// function addDecl(a,b) {
//   return a+b;
// }
// const addExpr = function(a,b){
//   return a+b;
// }
// // const addArrow = (a,b) => a+b;
// var addArrow = (a,b) => a+b;

// //Example
// console.log(undefined);
// if(!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart(){
//   console.log('All products deleted!');
// }
// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//THIS KEYWORD
//METHOD EXAMPLE
// const jonas = {
//   name: 'Jonas',
//   year: 1989,
//   calcAge:function(){
//     return 2037 -this.year;//here this is pointed to the owner of the object which is jonas.
//   }
// };
// jonas.calcAge();
// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year : 1991,
//   calcAge: function() {
//     console.log(this);
//     console.log(2037 - this.year)
//   },
// }
// jonas.calcAge();

// const matilda = {
//   year:2017
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge(); 


// const f = jonas.calcAge;
// f();
// //    var firstName = 'Matilda';
//    const jonas = {
//    firstName: 'Jonas',
//     year : 1991,
//   calcAge: function() {
//     // console.log(this);
//     console.log(2037 - this.year);
//Solution 1
    // const self = this;//self or that
    
    // const isMillenial = function(){
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();
   
    
//     const isMillenial = function(){
//       console.log(self);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//   console.log(this);
//   console.log(`Hey ${this.firstName}`);
// },
// };
// jonas.greet();
// jonas.calcAge();

// //arguments keywords
// const addExpr = function(a,b) {
//   console.log(arguments);
//   return a+b;
// };
// addExpr(2,5);
// addExpr(2,5,8,12);
// var addArrow = (a,b) =>{
// console.log(arguments);
// return a+b;
// } ;
// addArrow(2,5,8);/

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age :30
// }
// const friend = me;
// friend.age =27;
// console.log('Friend:', friend);
// console.log('Me',me);

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName,oldLastName);

// const jessica = {
//   firstName:'Jessica',
//   lastName: 'Williams',
//   age:27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:',jessica);
// console.log('After marriage:', marriedJessica);
// //marriedJessica();

// //Copying objects
// const jessica2 = {
//   firstName :'jessica',
//   lastName : 'Williams',
//   age:27,
//   family : ['Alice', ]
// }
// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName ='Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage:',jessica2);
// console.log('After marriage:', jessicaCopy);

// ARRAY DESTRUCTURING
// const restaurant = {
//   name: 'Classico Italiano',
//   location:'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   StarterMenu : ['Focaccia', 'Bruschatte, Garlic bread, Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasts0', 'Risotto'],

//   order: function(starterIndex, mainIndex) {
//     return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   }
// };
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);
// let [main,secondary] = restaurant.categories;
// console.log(main,secondary);
// //Switching Variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main,secondary);

// [main,secondary] = [secondary,main];
// console.log(main,secondary);
// const[starter, main] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
// const nested = [2, 4, [5, 6]];
// // const [i ,j] = nested;
// // console.log(i,j);
// const [i,[j,k]] = nested;
// console.log(i,j,k);

//Default values
const [p=1, q=1, r=1] = [8,9];
console.log(p, q, r);
const restaurant = {
  name : 'Classico Italiano',
  location : 'Via Angelo Tavanti 23, Firenze, Italy',
  categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu : ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese salad'],
  mainMenu : ['Pizza', 'Pasta', 'Risotto'],
  
  openingHours : {
    thu: {
      open: 12,
      close: 22
  },
  fri: {
    open:11,
    close: 23,
  },
  sat: {
    open:0, //24hrs open
    close: 24,
  },
  },

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
    console.log(`Order received! ${this. startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex:2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
})

const {name, openingHours, categories} = restaurant;
console.log(name , openingHours, categories);

const {name: restaurantName,openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);
//Default values
const {menu = [], startMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a:23, b:7, c:14};
// // let {a,b} = obj;//reference error since variable is immutable.It can be solved as
// ({a,b} = obj);
// console.log(a,b);

//Nested objects
const {
  fri:{open: o, close: c},
} = openingHours;
console.log(o, c);

// const arr = [7,8,9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1,2,...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1,2,7,8,9);

// //another example
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy Array
// const mainMenuCopy= [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// //Join 2 arrays
// const menuNew =[...restaurant.startMenu, ...restaurant.mainMenu];
// console.log(menuNew);

// //iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, '', '$.'];
// console.log(letters);
// console.log(...str);
// console.log('j', 'o');
//console.log(`${...str} Schmedtmann`);

//1)DESTRUCTURING
//SPREAD, because on RIGHT side of =
// const arr = [1,2, ...[3,4]];

// //REST, because on LEFT side of ==
// const [a,b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// const [pizza, Risotto,...otherFood]  = [...restaurant.mainMenu, ...restaurant.startMenu]
// console.log (pizza, Risotto,otherFood);

// //Objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// //2)FUNCTIONS
// const add = function(...numbers){
//   let sum = 0;
//   for(let i=0; i<numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// }
//   add(2,3);
//   add(5,3,7,2);
//   add(8,2,5,3,2,1,4);

//   const x = [23, 5, 7];
//   add(...x);
//LOGICAL OPERATORS can >>Use any datatype >>return any datatype>>Shortcircuiting.
console.log(3||'Jonas');
console.log(0 || 'Jonas')
console.log(true || 0);
console.log(undefined || null);
console.log (undefined || 0 || '' || 'Hello' || 23);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests:10;
console.log(guests1);
const guests2 =( restaurant.numGuests ) || 10;
console.log(guests2);
console.log('---AND---');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');