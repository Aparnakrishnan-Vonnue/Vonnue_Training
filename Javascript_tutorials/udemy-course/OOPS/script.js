 'use strict';
//  const Person = function(firstName, birthYear){
//    // console.log(this)
//    this.firstName = firstName;
//    this.birthYear = birthYear;

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
// Person.hey = function () {
//   console.log('Hey there');
// };
//Person.hey();
// const Car = function(model, color) {
//   this.model = model;
//   this.color = color;
// }
// const carName = new Car('BMW', 'Black');
// console.log(carName); 

// //PROTOTYPES
// console.log(Person.prototype);

//  Person.prototype.calcAge = function(){
//    console.log(2023 - this.birthYear);
//  };

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
  //Instance Method
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

  //STATIC METHOD
  static hey() {
    console.log('Hey There');
    console.log(this);
  }
}

// class StudenCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     ///Always neds to happen first!
//     super(fullName, birthYear);
//     //this.course = course;
//   }

// introduce() {
//   console.log(`My  name is ${this.fullName} and I study ${this.course}`);
// }

// calcAge() {
//   console.log(
//     `I'm ${
//       2037 - this.birthYear
//     }years old, but as a student I feel more like ${
//       2037 - this.birthYear + 10
//     }`
//   );
// }
// // }
// const martha = new StudentCl ('Martha Jones', 2012, 'computer science');
// martha.introduce();
// martha.calcAge();


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
PersonCl.hey();
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

 //Object.create()
//  const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
//  };
//  const steven = Object.create(PersonProto);
//  console.log(steven);
//  steven.name = 'Steven';
//  steven.birthYear = 2002;
//  steven.calcAge();

//  console.log(steven.__proto__ === PersonProto);
 
//  const sarah = Object.create(PersonProto);
//  sarah.init('Sarah', 1979);
//  sarah.calcAge();

 //CODING CHALLENGE
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`)
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
   }

   set speedUS(speed) {
    this.speed = speed * 1.6;
   }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

  // const Person = function(firstName, birthYear){
  //   // console.log(this)
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  // };

  // Person.prototype.calcAge = function(){
  //   console.log(2023 - this.birthYear);
  // };

  // const Student = function (firstName, birthYear, course) {
  //   // this.firstName = firstName;
  //   // this.birthYear = birthYear;
  //   Person.call(this,firstName, birthYear)
  //   this.course = course;
  // };
  // //Linking prototypes

  //   //Student.prototype = Object.create(Person.prototype)
  //   Student.prototype = Object.create(Person.prototype);

  //   Student.prototype,introduce = function() {
  //     console.log(`My name is ${this.firstName} and i study ${this.course}`);
  //   }

  //   const mike = new Student ('Mike', 2020, 'Computer Science');
  //   // console.log(mike);
  //   mike.introduce();
  //   mike.calcAge();

  //   console.log(mike.__proto__);
  //   console.log(mike.__proto__.__proto__);

  //   console.log(mike instanceof Student);
  //   console.log(mike instanceof Person);
  //   console.log(mike instanceof Object);

  //   Student.prototype.constructor = Student;
  //   console.dir(Student.prototype.constructor);

    //Coding challenge
  // const Car = function(make, speed) {
  //   this.make = make;
  //   this.speed = speed;
  // };

  // Car.prototype.accelerate = function() {
  //   this.speed += 10;
  //   console.log(`${this.make} is going at ${this.speed} km/h`);
  // };

  // Car.prototype.brake = function () {
  //   this.speed -= 5;
  //   console.log(`${this.make} is going at ${this.speed} km/h`)
  // }

  // const EV = function (make, speed, charge) {
  //   Car.call(this, make, speed);
  //   this.charge = charge;
  // };

  //Link the prototypes
  // EV.prototype = Object.create(Car.prototype);

  // EV.prototype.chargeBattery = function (chargeTo) {
  //   this.charge = chargeTo;
  // };

  // // EV.prototype.accelerate = function() {
  // //   this.speed += 20;
  // //   this.charge--;
  // //   console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  // //   );
  // // };

  // const tesla = new EV('Tesla', 120, 23);
  // // console.log(tesla);
  // tesla.chargeBattery(90);
  // console.log(tesla);
  // tesla.brake();
  // tesla.accelerate();


  // const PersonProto = {
  //   calcAge() {
  //     console.log(2037 - this.birthYear);
  //   },
  //   init(firstName, birthYear) {
  //     this.firstName = firstName;
  //     this.birthYear = birthYear;
  //   },
  //  };
  //  const steven = Object.create(PersonProto);

  //  const StudentProto = Object.create(PersonProto);
  //  StudentProto.init = function(firstName, birthYear,course) {
  //   PersonProto.init.call(this, firstName, birthYear);
  //   this.course = course;
  //  };

  //  StudentProto.introduce = function() {

  //   introduce() {
  //     console.log(`My  name is ${this.fullName} and I study ${this.course}`);
  //   }

  //  }
  //  const jay = Object.create(StudentProto);
  //  jay.init('Jay', 2010, 'Computer Science');
  //  jay.introduce();
  //  jay.calcAge();


  //1)Public fields
  //2)Private fields
  //3)Public methods
  //4)Private methods
  //(there is also a static version)

   //Another class
   class Account {
    //1)Public fields(instances)
    locale = navigator.language;

    //2)Private fields
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      //protected property
      this.#pin = pin;
      this._movements = [];
      this.locale = navigator.language;
    
    console.log(`Thanks for opening an account, ${owner}`)
  };
 //3)Public interface

  getMovements(){
    return this.movements;
  }

  deposit(val) {
    this._movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit();
    return this;
  }

 
  requestLoan(val){
    if(this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
  static helper(){
    console.log('Helper')
  }

  //4)Private methods
  _approveLoan(val) {
    return true;
  }
}

   const acc1 = new Account('Jonas', 'EUR', 1111);

  //  acc1._movements.push(250);
  //  acc1._movements.push(-140);
   acc1.deposit(250);
   acc1.withdraw(140);
   acc1.requestLoan(1000);
  //  acc1.approveLoan(1000);
   console.log(acc1.getMovements());
   console.log(acc1);
   console.log(acc1.pin);

  //  console.log(acc1.#movements);
  //  console.log(acc1.#pin)
  // console.log(acc1.#approveLoan(100));
  Account.helper();
   
  //Chaining
  acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000); 
  console.log(acc1.getMovements());