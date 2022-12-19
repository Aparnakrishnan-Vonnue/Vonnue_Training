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
console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year : 1991,
  calcAge: function() {
    console.log(this);
    console.log(2037 - this.year)
  },
}
jonas.calcAge();

const matilda = {
  year:2017
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); 