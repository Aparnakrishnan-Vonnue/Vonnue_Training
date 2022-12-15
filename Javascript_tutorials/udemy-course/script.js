// alert("Hello World")
// if (js === 'amazing')alert('javascript is FUN!')
// js = 'boring'
// if (js === 'amazing')alert('javascript is FUN!')
// 40 + 8 + 23 - 10;
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
// //VALUES AND VARIABLES
// // console.log("Jonas");
// let firstName = "Matilda";
// console.log(firstName);

// // let 3years = 3; error due to classname syntax.
// let myFirstJob = "Programmer";
// let myCUrrentJob = "Teacher"

// let job1 = 'PROGRAMMER';
// let job = 'teacher';
// console.log(myFirstJob);
// //assignments
// let country = 'India';
// let continent = 'Asia';
// let population = '1.417 billion';
// console.log(country);
// console.log(continent);
// console.log(population);
// //Data Types 
// true;
// // console.log(true); //boolean
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "23");
//  javascriptIsFun = 'YES!';
//  console.log(typeof javascriptIsFun);
//  let year;
//  console.log(year);
//  console.log(typeof year);
//  year = 1991;
//  console.log(year);
//  console.log(typeof year);
//  console.log(null);
//  console.log(typeof null);
// let age = 30;
// age = 31;  //here we mutated the variable.
// const birthYear = 1998;
// birthYear =1997;
// var job = 'programmer';
// job = 'teacher';
// console.log(job);
// lastName = 'sfgfthb'
// console.log(lastName);
// operators
// Math operators
// const now = 2037;
// // const ageJonas = 2007 - 1991;
// // const ageSarah = 2037 - 2018;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas/2**3);
// //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
// const firstName = 'jonas';
// const lastName = 'jajfebj';
// console.log(firstName + ' ' + lastName);
// //Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10;
// x *= 4; // x = x * 4;
// x++; //x = x + 1;
// x--; // x = x - 1;
// console.log(x);
// //comparison operators
// console.log(ageJonas> ageSarah);
// //comparison operators : <,>,>=,<=
// console.log(ageSarah>=18);
//  const isFullAge = ageSarah >= 18;
//  console.log (now - 1991 > now - 2018);
 //operator precedence
//  const now = 2037;
//  const ageJonas = now - 1991;
//  const ageSarah = now - 2018;

//  console.log (now - 1991 > now - 2018);
//  console.log(25 -10 - 5);
//  let x,y;
//  x = y = 25 - 10 -5;
//  console.log(x,y);
//  const averageAge = ageJonas + ageSarah / 2;
//  console.log(ageJonas,ageSarah,averageAge);
//excercise
// const massOfMark = 78;
// const heightOfMark = 1.69;
// const massOfJohn = 92;
// const heightOfJohn = 1.95;
// console.log('BMI of Mark ='+" "+massOfMark/heightOfMark**2);
// console.log('BMI of John ='+" "+massOfJohn/heightOfJohn**2);
// const markBMI = massOfMark/heightOfMark**2;
// const johnBMI = massOfJohn/heightOfJohn**2;
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;
// const jonas = "I'm " + firstName + ', a'+" "+ (year - birthYear) + 'years old' + job + '!';
// console.log(jonas);
//template-literal
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);
// console.log(`just a regular string...`);
// //template-literal to create a multiline string
// console.log('String with \n\
// multiple \n\
// lines');
// console.log(`String 
// multiple
// lines`);
//if/else statements
// const age = 12;
// const isOldEnough = age >= 18;
// if(isOldEnough){
//   console.log('Serah can start her driving license 🚗');
// }
// if(age>=18){
//   console.log('Serah can start her driving license 🚗');
// }else {
//  const yearsLeft = 18 - age;
//  console.log(`Serah is too young. Wait another ${yearsLeft} years :`);
//  }

//  const birthYear = 1991;
//  let century;
//  if(birthYear <= 2000) {
//    century = 20;
//  }else {
//    century = 21;
//  }
//  console.log(century);
//coding challenge 2
// const massOfMark = 78;
// const heightOfMark = 1.69;
// const massOfJohn = 92;
// const heightOfJohn = 1.95;
// console.log('BMI of Mark ='+" "+massOfMark/heightOfMark**2);
// console.log('BMI of John ='+" "+massOfJohn/heightOfJohn**2);
// const markBMI = massOfMark/heightOfMark**2;
// const johnBMI = massOfJohn/heightOfJohn**2;
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);
// if(markHigherBMI) {
//   console.log(`Mark's BMI ${markBMI} is higher than john's BMI ${johnBMI}`)
// } else {
//   console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`)
// };
//Type conversion and coercion
//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// // console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
// console.log(Number('Jonas'));//output will be NaN which means not a number
// console.log(typeof NaN);//output will be number
// console.log(String(23), 23);
// //type coersion
// console.log('I am' +" " + 23 +" " + 'years old');
// console.log('23' - '10' - 3);//JS converts strings to numbers
// console.log('23' + '10' + 3);//concatenation occurs.
// console.log('23' * '2');
// console.log('23' / '2');
// //game
// let n = '1' + 1; //output:11 the string
// n = n - 1;//output 11 - 1 = 10
// console.log(n); //output = 10
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));
//js doing type coersion to booleans: when using a logical operator and in a logical context like if else statement
// const money =0;
// if (money) {
//   console.log("Don't spend it all ;");
// }else {
//   console.log('You should get a job!');
// }
// //in the above case money is declared as a number which is a falsy value. 
//inthe case of ifelse condition, the condition is always accepted as a boolean.
//since 0 is a falsy value, money is accepted as false in if condition, So else condition is executed.
// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;");
// }else {
//   console.log('You should get a job!');
// } //here if condition will be executed since 100 is truthy.
// let height; //undefined
// if (height) {
//   console.log('YAY! height is defined');
// } else {
//   console.log('Height is UNDEFINED')
// } 
//equality operators
// const age = '18';
// if (age === 18) {
//   console.log('You just became an adult');
// } else {
//   console.log('You are too young!');
// } //strictly equal means string is not converted to number.

// const favourite = prompt("What is your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite ===  23)//('23'==23) type coersion
//  {
//   console.log('Cool! 23 is an amazing number')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number!');
// }else {
//   console.log('Number is not 23 or 7');
// }

// if (favourite!==23) console.log('Why not 23?');
// const hasDRiversLicense = true ; //A
// const hasGoodVision = true; //B
// console.log(hasDRiversLicense && hasGoodVision);
// console.log(hasDRiversLicense || hasGoodVision);
// console.log(!hasDRiversLicense);
// const shouldDrive = hasDRiversLicense && hasGoodVision;
// if(shouldDrive) {
//   console.log("Serah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }

// const isTired = true; //c
// console.log(hasDRiversLicense || hasGoodVision || isTired);
// if (hasDRiversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log ('Someone else should drive...');
// }
//coding challenge
// const dolphinScore = (88 + 91 + 110) / 3 ;
// console.log(dolphinScore);
// const koalasScore = (87 + 91 + 110) / 3 ;
// console.log(koalasScore);
// if (dolphinScore > koalasScore && dolphinScore >=100) {
//   console.log("Dolphins won the competition");
// } else if (dolphinScore === koalasScore && dolphinScore >= 100 && koalasScore >= 100) {
//   console.log("both teams are winners");
// } else {
//   console.log("No team is winner")
// }
//The switch statement
// const day = 'saturday';
// switch(day) {
//   case 'monday' :
//     console.log('Plan course structure');
//     console.log('Goto coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare my theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday' :
//     console.log('Write code examples');
//     break;
//   case 'friday' :
//     console.log('Record videos')
//     break;
//   case 'saturday' :
//   case 'sunday' :
//     console.log('Enjoy the weekend :D')
//     break;
//   default :
//   console.log('Not a valid day!')
//   }
//   if (day === 'monday'){
//     console.log('Plan course structure');
//     console.log('Goto coding meetup');
//   }else if(day === 'tuesday') {
//     console.log('Prepare my theory videos');
//   }else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
//   }else if (day ==='friday'){
//     console.log('Record videos')
//   }else if(day ==='saturday' || day ==='sunday') {
//     console.log('Enjoy the weekend :D')
//   }else {
//     console.log('Not a valid day')
//   }
//expressions
// 3+4;
//1991;
//true && false && !false

// if(23>10) {
//   const str = '23 is bigger';
// }
// // console.log(`I'm ${2022-1998} years old ${if (23>10){
// //   const str = '23 is bigger'
// // }}`)
// const me = 'Aparna';
// console.log(`I'm ${2002-1998} years old ${me}`)
// const age = 25;
// // age >= 18 ? console.log('I would like to drink wine 🍷'): //ternary operator
// // console.log('I like to drink water🍶');

// const drink = age >= 18 ? 'wine 🍷' : 'water🍶' ;
// console.log(drink);
// let drink2;
// if(age >= 18) {
//   drink2 = 'wine 🍷';
// }else {
//   drink2 = 'water🍶';
// }
// console.log(drink2);
// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water🍶'}`);
//coding challenge
// let billValue = 275;
// const tip = billValue >= 50 &&  billValue <= 300 ? billValue * 0.15 : 
// billValue *0.2;
// console.log(`The bill was ${billValue},The tip was ${tip} and the total value is ${billValue + tip}`);

/*SECTION_2*/

// 'use strict';
// let hasDRiversLicense = false;
// const passTest = true;
// if (passTest) hasDRiversLicense = true;
// if (hasDRiversLicense) console.log('I can drive :D');
// Functions
// function logger(){
//   console.log('My name is Jonas');
// }
// //calling/running/invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples,oranges){
//   console.log(apples,oranges);
//   const juice = `juice with ${apples} apples and ${oranges}oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);
// const num = Number('23');
// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
//   //or this can be simply written as
//   //return 2037 - birthyear;
//   }
//   calcAge1(1991);
//function declaration
// function calcAge1(birthYear) {
//   // const age = 2037 - birthYear;
//   // return age;
//   //or this can be simply written as
//   return 2037 - birthYear;
//   }

//   const age1 = calcAge1(1991);
// //function expression
//   const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
//   }
//   const age2 = calcAge2(1991);
//   console.log(age1, age2);
 //Arrow function

// const calcAge2 = function(birthYear){
//      return 2037 - birthYear;
//    }
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);
//how many years a person has until retirement
// const yearsUntilRetirement = (birthYear,firstName) =>{
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991,'Jonas'));
// console.log(yearsUntilRetirement(1996,'Bob'));


// function car(name){
//   return name
// }

// console.log(car('volvo'))

// const car= (name,age) => {
//   let sum = age +23;
//   return(`hello, ${name} my age is ${sum}` )
// }
// console.log(car('volvo',22))

// function fruits(apple, orange) {
//   return `${apple} ${orange}`
// }
// const a = fruits(5,4);
// console.log(a)
//functions calling other functions
// function cutFruitPieces(fruit){
//   return fruit*4;
// }
//  function fruitProcessor(apples,oranges) {
//    const applePieces = cutFruitPieces(apples);
//    const orangePieces = cutFruitPieces(oranges);
//    const juice = `juice with ${applePieces} apples and ${orangePieces} oranges.`;
//    return juice;
//  };
//  console.log(fruitProcessor(2,4));
//  const calcAge = function (birthYear){
//   return 2037 - birthYear;
//  } //function declaration : Functions that can be used before its declared.
//  const yearsUntilRetirement = function (birthYear,firstName){
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     if(retirement > 0) {
//       console.log(`${firstName} retires in ${retirement} years`);
//       return retirement;
//     } else {
//       console.log(`${firstName} has already retired 🥳`)
//       return - 1;
//     }
    
//     // return `${firstName} retires in ${retirement} years`;
//   }
//   console.log( yearsUntilRetirement(1991, 'Jonas'));
//   console.log( yearsUntilRetirement(1975, 'Bob'));
// //Coding challenge
// const calcAverage = (score1,score2,score3) =>{
//   // const dolphinScore = (44,23,71);
//   // const koalasScore = (65,54,49)
//   return (score1 + score2 + score3) / 3 ;
// }
// console.log (calcAverage(3,4,5));
// let dolphinAverageScore = calcAverage(44,23,71);
// let koalaAverageScore = calcAverage(65,54,49);
// console.log(dolphinAverageScore, koalaAverageScore);

// const checkWinner = function(avgDOlphins, avgKoalas){
//   if (avgDOlphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆(${avgDOlphins} vs.${avgKoalas}) `)
//   } else if(avgKoalas >= 2 * avgDOlphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDOlphins})`)
//   } else {
//     console.log('No team wins...')
//   }
// }
// checkWinner(dolphinAverageScore,koalaAverageScore);
// checkWinner(800,400);
// dolphinAverageScore = calcAverage(85,54,41);
// koalaAverageScore = calcAverage(23,34,27);
// console.log(dolphinAverageScore, koalaAverageScore);
// checkWinner(dolphinAverageScore, koalaAverageScore);
//ARRAYS
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
// const friends = ['Michael','Steven','Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length -1]);
// friends[2] = 'Ray';
// console.log(friends);
// const firstName = 'Aparna' ;
// const Aparna = [firstName, 'KERALA', 2022-1998, 'teacher', 'friends'];
// console.log(Aparna);

// const calcAge = function(birthYear) {
//   return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1,age2,age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

//BASIC ARRAY OPERATIONS
//ADD ELEMENTS
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength); //push method adds elements to the end of an array.

// friends.unshift('John');
// console.log(friends); //unshift methods add element to the beginning of an array.

// //REMOVE ELEMENTS
// friends.pop(); //Removes the last element of an array.
// console.log(friends);

// friends.shift(); //Removes element from the beginning of an array.
// console.log(friends);
// friends.push(23);
// console.log(friends.indexOf('Steven'));//gives the position number of the element.
// console.log(friends.includes('Steven'));//gives boolean output true if element is included in the array and false if it is not.
// console.log(friends.includes('23'));//false since element included is a number where as logged out as string.
// if(friends.includes('Peter')){
//   console.log('You have a friend called Peter.')
// }

//CODING CHALLENGE

// const calcTip = function(billValue) {
//   return billValue >= 50 && billValue <= 300 ? billValue* 0.15: billValue * 0.20;
// }
// const bills = [125,555,44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips);

//OBJECTS
// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//    2037-1991,
//    'teacher',
//    ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//   firstName : 'Jonas',
//   lastName : 'Schmedtmann',
//   age : 2037-1991,
//   job : 'teacher',
//   friends : ['Michael','Peter','Steven']
// };
// console.log(jonas);
// console.log(jonas.lastName);
// console.log (jonas.firstName);
// console.log(jonas.friends);
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt ('What you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// }else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman'
// console.log(jonas);

// //challenge
// //"Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// OBJECT METHODS
// const jonas = {
//   firstName : 'Jonas',
//   lastName : 'Schmedtmann',
//   birthYear : 1991,
//   job : 'teacher',
//   friends : ['Michael','Peter','Steven'],
//   hasDriversLicense : true,
//   // calcAge:  function(birthYear) {
//   //   return 2037 - birthYear;
//   // }
//   calcAge:  function() {
//     console.log(this);
//     return 2037 - this.birthYear;
//   }
// };
// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));

//CHALLENGE
// const summary = {
//   firstName : 'Jonas',
//   age : 46,
//   job : 'teacher',
//   hasDriversLicense: true
// };
// console.log(`${summary.firstName} is a ${summary.age}- year old ${summary.job}, and he has a driving license`)
//15/12/22
//CODING CHALLENGE
// const mark = {
//   fullName : 'Mark Miller',
//   mass : 78 ,
//   height : 1.69,
//   calcBmi : function (){
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   fullName : 'John Smith',
//   mass : 92,
//   height : 1.95,
//   calcBmi : function() {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// }
// mark.calcBmi();
// john.calcBmi();
// console.log(mark.bmi, john.bmi);
// if (mark.bmi > john.bmi){
// console.log(`${mark.fullName}'s BMI (${mark.calcBmi()}) is higher than ${john.fullName}'s BMI(${john.calcBmi()}) `)
// } else {
//   console.log(`${john.fullName}'s BMI (${john.calcBmi()}) is higher than ${mark.fullName}'s BMI(${mark.calcBmi()}) `)
// }
// ITERATION:THE FOR LOOP
// console.log('Lifting weights repetition 1')
// console.log('Lifting weights repetition 2')
// console.log('Lifting weights repetition 3')
// console.log('Lifting weights repetition 4')
// console.log('Lifting weights repetition 5')
// console.log('Lifting weights repetition 6')
// console.log('Lifting weights repetition 7')
// console.log('Lifting weights repetition 8')
// console.log('Lifting weights repetition 9')
// console.log('Lifting weights repetition 10')
//for loop keeps running while the condition is true.
// for (let rep = 1; rep <= 10; rep++){
//   console.log(`Lifting weights repetition ${rep}`)
// }
//LOOPING ARRAYS< BREAKING AND CONTINUING
// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037-1991,
//   'teacher',
//   ['Michael', 'Peter','Steven']
// ];
// const types = [];
// for (let i = 0; i<5 ;i++ ){
// console.log(jonasArray[i], typeof jonasArray[i]);
// // types[i] = typeof jonasArray[i];
// types.push(typeof jonasArray[i]);
// }
// console.log(types);
// const years = [1991,2007,2018,2021]
// const ages = [];
// for (let i=0;i<years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);
// //continue and break
// console.log('-----only strings----')
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== 'string')continue;
//   console.log(jonasArray[i],typeof jonasArray[i]);
// }
// console.log('-----break with number----')
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === 'number')break;
//   console.log(jonasArray[i],typeof jonasArray[i]);
// }
//Looping backwards and Loops inside Loops
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037-1991,
//   'teacher',
//   ['Michael', 'Peter','Steven']
// ];
// for (let i = jonas.length - 1; i >= 0; i--){
//   console.log(jonas[i]);
// }
// for (let excercise = 1; excercise < 4; excercise++){
//   console.log(`------------Starting excercise ${excercise}`);
//   for (let rep = 1; rep <= 6; rep ++){
//     console.log(`Excercise ${excercise}: Lifting weight repetition ${rep}`)
//   }
// }
//WHILE LOOP
//  for (let rep = 1; rep <= 10; rep++){
//    console.log(`Lifting weights repetition ${rep}`)
//  }
//  let rep = 1;
//  while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
//  }
//  let dice =Math.trunc( Math.random() * 6) +1
//  console.log(dice);
//  while(dice!==6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if(dice === 6) console.log('Loop is about to end...');
//  }
//CODING CHALLENGE
const calcTip = function(bill) {
  return bill >= 50 && bill <= 300? bill * 0.15 : bill * 0.20;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
const calcAverage = function(arr) {
  let sum = 0;
  for (let i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  // console.log(sum);
  return sum / arr.length;
}
console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));