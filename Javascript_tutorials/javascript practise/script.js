// function twoNumbers(num1,num2) {
//   let result = num1 * num2 
//   return result
// }

// console.log(twoNumbers(5,10));
// //in the above function variable is declared inside the scope of the function so that it is accessible only inside the scope of the function.

// document.querySelector('html').addEventListener("click", function(){
//   alert('Ouch! stop poking me')
// })
// console.log()

// const heightOfMark = 1.69
// const heightOfJohn = 1.95
// const weightOfMark = 78
// const weightOfJohn = 92
// let bmiOfMark = weightOfMark / (heightOfMark**2);
// let bmiOfJohn = weightOfJohn / (heightOfJohn ** 2);
// console.log(bmiOfMark);
// console.log(bmiOfJohn);
// markHigherBMI = bmiOfMark > bmiOfJohn;
// if (bmiOfJohn < bmiOfMark) {
//   console.log(`Mark has a BMI of ${bmiOfMark} which is greater than John's BMI which is ${bmiOfJohn}`)
// }else{
//   console.log('john has a higher BMI')
// }

// let team1 = 'Dolphins';
// let team2 = 'Koalas';

// let avgDolphins = averageScore(96,108,89);
// let avgKoalas = averageScore(88,91,110);

// // console.log(`average score for ${team1} is teamScore(96,108,89)`);
// console.log(`Dolphins have an average score of ${avgDolphins}`);
// console.log(`Koalas have an average score of ${avgKoalas}`);

// document.write('hello world')
// alert('learn JavaScript..This is interesting');
// console.log('hello world');
// document.write("<h1>Expertise in JavaScript</h1>");
//variables and datatypes
//String
// var person = 'John';
// let person1 = 'Smith'

//Number
// var number1 = 10;
// var nummber2 = 68;

//Boolean
// var js = true;

//undefined
// var test1;

// document.write(test1);
// document.write(typeof test1)

//ASSIGNMENT OPETAYORS
// var x = 10;
// var result = x *- 4;
// document.write(result)

//comparison operator
//1) == Equal to
//2) === IDentical
//3) > Greater than
//4) < Less than
//5) >= Greater than or equal to;
//6) <= Lesthan or equal to;
//7) !=  not equalto

// document.write(a == b);

//Logical Operators
//1) Logical and: && => Both statements are true
//2)Logical OR :|| => One of the statement is true
//3)Logical Not: ! => Opposite result

//if statement
// var a = 10;
// if (a > 0) {
//   document.write('Positive number')
// } else {
//   document.write('Negativr ==')
// }

//Swith statement

// switch (expression) {
//   case 1 :
//     code1;
//     break;
//   case 2 :
//     code2;
//     break;
//   case 3 :
//     code3;
//     break;
//   default:
//     code default ;
//     break;
// }

// var a = "B";
// switch(a) {
//   case "A":
//     document.write("Apple");
//     break;
//   case "B":
//     document.write("Ball");
//     break;
//   case "C":
//     document.write("Cat");
//     break;
//   default:
//     document.write("Invalid character")
// }

//LOOPS
// document.write("Hello" + "<br>");
// document.write("Hello" + "<br>");
// document.write("Hello" + "<br>");
// document.write("Hello" + "<br>");
// document.write("Hello" + "<br>");

//FOR LOOP
// for(var i=1; 1<=5; i++){
//   document.write(i + "<br>");
// }

//WHILE LOOP
var i = 1 ;
while(i <= 5) {
  console.log(i);
  i++;
}