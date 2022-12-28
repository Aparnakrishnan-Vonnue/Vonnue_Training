'use strict';
// const Person = function(firstName, birthYear){
//   // console.log(this)
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Never create a function inside a constructor function.
//   this.calcAge = function() {
//     console.log(2023 - this.birthYear)
//   };
// }
// const aparna = new Person('Aparna', 1998);
// console.log(aparna);

// //eg:
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);


// //1.New{} is created . {}empty object
// //2.function is called, this = {}
// //3.{} linked to prototype
// //4.function automatically return{}

// console.log(aparna instanceof Person);
// // const jay = 'jay';
// // console.log(jay instanceof Person);

// // const Car = function(model, color) {
// //   this.model = model;
// //   this.color = color;
// // }
// // const carName = new Car('BMW', 'Black');
// // console.log(carName); 

// //PROTOTYPES
// console.log(Person.prototype);

// Person.prototype.calcAge = function(){
//   console.log(2023 - this.birthYear);
// };

// aparna.calcAge();
// console.log(aparna.__proto__);
// console.log(aparna.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(aparna));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// //.prototypeOfLinkedObjects
// Person.prototype.species = 'Homo Sapiens';
// console.log(aparna.species, matilda.species);

// console.log(aparna.hasOwnProperty('firstName'));
// console.log(aparna.hasOwnProperty('species'));

// console.log(aparna.__proto__);
// console.log(aparna.__proto__.__proto__);
// console.log(aparna.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor); 

// const arr = [3,4,5,6,9,3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function(){
//   return[...new Set(this)];
// }
// console.log(arr.unique());
// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

//CODING CHALLENGE
// const Car = function(make, speed){
//   this.speed = speed;
//   this.make = make;
// }
// Car.prototype.accelerate = function(){
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// }
// Car.prototype.brake = function(){
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} kkm/h`);
// }

// const bmw = new Car('BMW',120);
// const mercedes = new Car('Mercedes', 95)
// console.log(bmw, mercedes);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.accelerate();

//Es6 classes

//class expressions
// class PersonCl = class{}

//class declaration
class PersonCl{
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge(){
    console.log(2023 - this.birthYear)
  }

  greet(){
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2023 - this.birthYear
  }

  set fullName(name) {
    console.log(name);
    if(name.includes('')) this._fullName = name;
    else alert(`${name} is not a full name!`)
  }

  get fullName(){
    return this._fullName;
  }
}
const aparna = new PersonCl('Aparna Krishnan', 1998);
console.log(aparna);
aparna.calcAge();
console.log(aparna.age)
console.log(aparna.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//   console.log(`Hey ${this.firstName}`);
// }
aparna.greet();

//1. classes are not hoisted
//2. classes are first class  citizens
//3. classes are executed in strict mode.

//Setters and Getters
 const walter = new PersonCl('Walter White', 1965);
 
 const account = {
  owner: 'Jonas',
  movements : [200, 530, 120, 300],

  get latest(){
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
 };

 console.log(account.latest);
 account.latest = 50;
 console.log(account.movements);
