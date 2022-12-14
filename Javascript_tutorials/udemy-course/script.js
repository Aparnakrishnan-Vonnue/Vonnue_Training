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
const yearsUntilRetirement = (birthYear,firstName) =>{
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1996,'Bob'));


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

function cutFruitPieces(fruit){
  return fruit*4;
}
 function fruitProcessor(apples,oranges){
   const applePieces = cutFruitPieces(apples);
   const orangePieces = cutFruitPieces(oranges);

   console.log(apples,oranges);
   const juice = `juice with ${apples} apples and ${oranges}oranges.`;
   return juice;
 };
 console.log(fruitProcessor(2,4));
 
