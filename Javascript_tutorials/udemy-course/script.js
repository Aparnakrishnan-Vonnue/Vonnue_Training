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
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

