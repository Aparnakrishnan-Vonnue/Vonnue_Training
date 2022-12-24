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
// const [p=1, q=1, r=1] = [8,9];
// console.log(p, q, r);
// const restaurant = {
//   name : 'Classico Italiano',
//   location : 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   startMenu : ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese salad'],
//   mainMenu : ['Pizza', 'Pasta', 'Risotto'],
  
//   openingHours : {
//     thu: {
//       open: 12,
//       close: 22
//   },
//   fri: {
//     open:11,
//     close: 23,
//   },
//   sat: {
//     open:0, //24hrs open
//     close: 24,
//   },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
//     console.log(`Order received! ${this. startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//   },
// };
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex:2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// })

// const {name, openingHours, categories} = restaurant;
// console.log(name , openingHours, categories);

// const {name: restaurantName,openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);
// //Default values
// const {menu = [], startMenu: starters = []} = restaurant;
// console.log(menu, starters);

//Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a:23, b:7, c:14};
// // let {a,b} = obj;//reference error since variable is immutable.It can be solved as
// ({a,b} = obj);
// console.log(a,b);

//Nested objects
// const {
//   fri:{open: o, close: c},
// } = openingHours;
// console.log(o, c);

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
// console.log(3||'Jonas');
// console.log(0 || 'Jonas')
// console.log(true || 0);
// console.log(undefined || null);
// console.log (undefined || 0 || '' || 'Hello' || 23);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests:10;
// console.log(guests1);
// const guests2 =( restaurant.numGuests ) || 10;
// console.log(guests2);
// console.log('---AND---');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;


//Nullify coalescing operator(check for nullish values: null and undefined(NOT 0 or ''))
// console.log(guests);
// const guestCorrect  = restaurant.numGuests ?? 10;
// // console.log(guestCorrect);
// const rest1 = {
//   name: 'Capri',
//   //numGuests : 20,
//   numGuests : 0,
// }
// const rest2 = {
//   name:'La Pnoz',
//   owner: 'Giovanni Rossi',
// }
//  rest1.numGuests = rest1.numGuests || 10;
//  rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;

// // rest1.owner = rest2.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// // rest1.owner &&= '<ANONYMOUS>';
// // rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

//CODING CHALLENGE
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze'
//     ],
//   ],
//   score: '4.0',
//   scored : ['Lewandowski','Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//1.
// const [players1, players2] = game.players;
// console.log(players1,players2);

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers);

// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// //5.
// const {odds:{team1, x:draw, team2}} = game;
// console.log(team1, draw, team2);

// //6.
// const printGoals = function(...players){
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(game.scored);

// //7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

//LOOPING ARRAYS
// const menu = [...restaurant.startMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) {
//   console.log(`${i+1}: ${el}`);
// }
// console.log([...menu.entries()]);
// if(restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);
// // if(restaurant.openingHours.fri)
// // console.log(restaurant.openingHours.fri.open);

// //WITH OPTIONAl CHAINING
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon?.open);
// // EXAMPLE
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; 
//   console.log(`On ${day}, we open at ${open}`);
// }
// //METHODs
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist.');
// console.log(restaurant.orderRisotto?.(0,1) ?? ' Method does not exist');

// //Arrays
// const users = [{name:'Jonas', email: 'hello@jonas.io'}];
// console.log(users[0]?.name ?? 'User array empty');

//CODING CHALLENGE 2
//1.
// for(const[i, player] of game.scored.entries()){
//   console.log(`Goal ${i + 1}: ${player}`);
// };
// //2.
// let average = 0;
// for (const odd of Object.values(game.odds))
// average += odd;
// // average /= object.values(game.odds);
// console.log (average);

// //3.
// for (const of [])

//SETS
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza'
// ]);
// console.log(ordersSet);
// console.log( new Set('Aparna'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.add('Risotto');
// //ordersSet.clear();
// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);

// //Example
// const staff = ['Waiter','chef', 'Waiter', 'Manager', 'chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef','Waiter', 'Manager', 'chef', 'Waiter' ]) .size
// )
// console.log(new Set('jonasschmedtmann').size)
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon,Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open',11)
//   .set('close',23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// const time = 21;
// rest.get(time > rest.get('open') && time < rest.get('close'));
// console.log(rest.has('categories'));
// rest.delete(2);
// //rest.clear();
// rest.set([1,2], 'Test');
// console.log(rest);
// console.log(rest.size);
// // console.log(rest.get([1,2]));
// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript']
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'Try again'],
// ])
// console.log(question);

// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if(typeof key == 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct')) === answer);
// //convert map to array
// console.log(...question);
// // console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());
// const gameEvents = new Map([
//   [17,'GOAL'],
//   [36, 'Substitution'],
//   [47, 'GOAL'],
//   [61,'Substitution '],
//   [64, 'Yellow card'],
//   [69, 'Red CArd'],
//   [70, 'Substitution'],
//   [72, 'Substitution']
//   [76, 'GOAL'],
//   [80,'GOAL'],
//   [92, 'Yellow Card'],
// ]);
// //const events
// //1.
// console.log(gameEvents. values());
// const events = new Set(gameEvents.values());

//Strings
//const airline = 'TAP Air portugal';
// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4,7));

// console.log(airline.slice(0, airline.indexOf('')));
// console.log(airline.slice(airline.lastIndexOf('')+1));
// console.log(airline.slice(-2));
// console.log(airline.slice(-1));

// const checkMiddleSeat = function(seat) {
//   //B and E are middle seats.
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
// const airline = 'TAP Air portugal';
// console.log(airline.toUpperCase());
// console.log(airline.toUpperCase());
// //FIX CAPITALIZATION IN NAME
// const passenger = 'jOnAS'; //Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

//Comparing emails

// const email = 'hello@jonas.io';
// const loginEmail = 'Hellooo@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

//replacing
// const priceGB = '288,97$';
// const priceUS = priceGB.replace ('$', '$').replace(',', '.');
// console.log(priceUS);
// const announcement = 'All passengers come to boarding door 23, Boarding door 23!';

// console.log(announcement.replace('door','gate'));
// //console.log(announcement.replaceAll('door','gate'))
// console.log(announcement.replace(/door/g, 'gate'));

//Booleans
// const plane = 'Airbus A320ne0';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.includes('Air'));

// if (plane.startsWith ('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the New Airbus family');
// }
//Practise exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun')){
//     console.log('You are NOT allowed on board');
//   }else {
//     console.log('Welcome abroad!')
//   }
// };
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and Camera');
// checkBaggage('Got some snacks and a gun for protection');

//split(string method)
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(''));

// const [firstName, lastName] = 'Jonas Schmedtmann' . split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()] . join(' ');
// console.log(newName);

// const capitalizeName = function(name) {
//   const  names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0] .toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// }
// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// //Padding a string
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+'));
// console.log('Jonas'.padStart(25, '+')); 

// //example
// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// }
// console.log(maskCreditCard(987658335474));

// //Repeat method
// const message2 = 'Bad weather...All departures delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// }
//   planesInLine(5);
//   planesInLine(3);
//   planesInLine(12);

//   //CODING CHALLENGE
//   document.body.append(document.createElement('textarea'));
//   document.body.append(document.createElement('button'));
//   document.querySelector('button').addEventListener('click', function(){
//     const text = document.querySelector('textarea').value;
//     const rows = text.split('\n')
//     console.log(rows);

//     for (const row of rows) {
//       const[first, second] = row.toLowerCase().trim().split('_');
//       console.log(row, first, second);

//       const output =  `${first} ${second.replace(
//         second[0],
//         second[0].toUpperCase();
//       )}`;
//       console.log(output);
//     }

//   })
  // const flights = 
  // '_Delayed_Departure;fao78455187;txl451254612511:25 +_Arrival;bru4174686546;fao785444444;11.45+_Delayed_Arrival;hel7521225452002;fao78965252;12:05+_Departure;fao74521741;lis1253365522669;12:30';

  
  // for(const flight of flights.split('+')){
  //   const [type, from, to, time] = flight.split(';');
  //   const output = `${type.replaceAll('_',' ')} ${from} ${to} (${time.replace(':', 'h')})`;
  //   console.log(output);
  // }
// const bookings = [];
// const createBooking = function(
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ){
//   //ES5
//   //numPassengers = numPassenger || 1;
//   //price = price || 199;

// const booking = {
//   flightNum,
//   numPassengers,
//   price,
// };
// console.log(booking);
// bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123',2,800);
// createBooking('LH123',2);
// createBooking('LH123',5);

// createBooking('LH123', undefined, 1000);

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if(passenger.passport === 2574861664) {
//     alert('Checked in');
//   }else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//Is the same as doing...
// const flightName = flight;
// const passenger = jonas;

// const newPassport = function(person) {
//   person.passport = Math.trunc(Math.random()*100000000);
// };

// newPassport(jonas);
// checkIn(flight,jonas);
// const oneWord = function(str) {
//   return str.replace(/ /g, '').toLowerCase();
// }

// const  upperFirstWord = function(str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

//Higher Order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
// const high5 = function(){
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

//Functions returning functions
// const greet = function(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`)
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');
// greet('Hello')('Jonas');

// //Challenge : write the above code using arrow function
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
//  greetArr('Hi')('Jonas');

//  const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //book: function(){}
//   book(flightNum, name) {
//     console.log(
//     `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`,name})
//   },
//  };
//  lufthansa.book(239, 'Jonas Schmedtmann');
//  lufthansa.book(635, 'John Smith');
//  console.log(lufthansa);

// //  const eurowings = {
//   airline: 'Eurowings',
//   iataCode : 'EW',
//   bookings:[],
//  };
//  const book = lufthansa.book;
// //  book(23, ' Sarah Williams'); Does not work

//  //call method
//  book.call(eurowings,23, 'Sarah Williams');
//  console.log(eurowings);

//  book.call(lufthansa,239,'Mary Cooper');
//  console.log(lufthansa);

//  const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
//  };
//  book.call(swiss, 583, 'Mary Cooper');
//  console.log(swiss);

//   //apply method
//   const flightData =[583, 'George Cooper'];
//   book.apply(swiss, flightData);
//   console.log(swiss);

//   book.call(swiss, ...flightData)

//   //Bind Method
//   const bookEW = book.bind(eurowings);
//   const bookLH = book.bind(lufthansa);
//   const bookLX = book.bind (swiss);

//   bookEW(23, 'Steven Williams');

//   const  bookEW23 = book.bind(eurowings, 23);
//   bookEW23('Jonas Schmedtmann');
//   bookEW23('Martha Cooper');

//   //With Event Listener
//   // lufthansa.planes =300;
//   // lufthansa.buyPlane = function() {
//   //   console.log(this);

//   //   this.planes++;
//   //   console.log(this.planes);
//   // };
//   // lufthansa.buyPlane();
//   //  document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//    //Partial application
//    const addTax = (rate, value) => value + value * rate;
//    console.log(addTax(0.1,200));

//    const addVAT = addTax.bind(null, 0.23);
//    //addVAT = value => value + value * 0.23;

//   console.log(addVAT(100));
//   console.log(addVAT(23));
//   //challenge: rewrite the above examples using function returning function.
//   const addTaxRate = function(rate) {
//     return function(value) {
//       return value + value * rate;
//     };
//   };
//   const addVAT2 = addTaxRate(0.23);
//   console.log(addVAT2(100));
//   console.log(addVAT2(23));
// //CODING CHALLENGE
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0:Javascript', '1:Python', '2.Rust', '3.C++'],
//   //This generates [0,0,0,0]. More in the next section
//   answers:new Array(4).fill(0),
//   registerNewAnswer(){
//     //Get answer
//     const answer = Number(
//       prompt(
//         `${this.question} \n ${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     //Register answer
//     typeof answer === 'number' && answer < this.answer < this.answers.length && this.answers[answer]++;

//     console.log(this.answers);
//   },
//   displayResults(type = 'array') {
//     if(type==='array'){
//       console.log(this.answers);
//     }else if (type === 'string') {
//       //Poll results aare 13, 2 , 4 ,1
//       console.log(`Poll results are ${this.answers.join('.')}`);
//     }
//   },
// };
//poll.registerNewAnswer();
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer).bind(poll);
// poll.displayResults.call({answers: [5,2,3]}, 'string');
// poll.displayResults.call({answers: [1,5,3,9,6,1]}, 'string');
// poll.displayResults.call({answers: [1,5,3,9,6,1]}),'string}'

// const runOnce = function() {
//   console.log('This will never run again');
// }
// runOnce();

// //  IIFE
// (function (){
//   console.log('This will never run again');
//   const isPrivate = 23;
// })
// console.log(isPrivate);
// (() => console.log('This will ALSO never run again'))();
// const isPrivate = 23;
// var notPrivate = 46;
// //console.log(isPrivate);
// console.log(notPrivate);
// const secureBooking = function(){
//   let passengerCount = 0;
//   return function(){
//     passengerCount++;
//     console.log(`${passengerCount}passengers`);
//   }
  
// }
// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);

//CLOSURE METHODS
//EXAMPLE 1
// let f;
// const g = function(){
//   const a =23;
//   f= function() {
//     console.log(a*2);
//   };
// };

// const h = function(){
//   const b = 777;
//   f = function(){
//     console.log(b*2)
//   };
// };

// g();
// f();
// console.dir(f);
// //re-assigning f function
// h();
// f();
// console.dir(f);

// //EXAMPLE 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n/3;

//   setTimeout(function() {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// } 
// const perGroup = 1000;
// boardPassengers(180,3);
// //CODING CHALLENGE
// (function (){
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function(){
//     header.style.color = 'blue';
//   });
// })();

//SIMPLE ARRAY METHODS
//DATA
// const account1 = {
//   Owner: 'Jonas Schmedtmann',
//   movements : [200, 450,-400, 3000, -650, -130, 70, 1300 ],
//   interestRate : 1.2,//%
//   pin:1111,
// };
// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000,3400,-150,-790,-3210,-1000,8500,-30],
//   interestRate:1.5,
//   pin:2222,
// };
// const account3 = {
//   Owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate:0.7,
//   pin:3333,
// }
//slice method
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1,-2));
// console.log(arr.slice());
// console.log([...arr]);

// //splice method
// // console.log(arr.splice(2));
// arr.splice(-1)
// console.log(arr);
// console.log(arr.splice(3));
// arr.splice(1,2);
// console.log(arr);

// //Reverse
// arr = ['a','b', 'c', 'd','e'];
// const arr2 =['j', 'i', 'h', 'g', 'j'];
// console.log(arr2.reverse());

// //concat method
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //Join Method
// console.log(letters.join('-'));


//THE NEW AT METHOD
// const arr= [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //getting last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

//LOOPING ARRAYS_FOREACH METHOD
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements){
//   if(movement > 0) {
//     console.log(`You deposited ${movement}`);
//   }else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('----FOREACH----');
// movements.forEach(function(movement){
//   if(movement > 0) {
//     console.log(`You deposited ${movement}`);
//   }else{
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }) 
// movements.forEach(function(mov, i, arr){
//   if(mov > 0) {
//     console.log(`Movement ${i+1}:You deposited ${mov}`);
//   }else{
//     console.log(`Movement ${i+1}:You withdrew ${Math.abs(mov)}`);
//   }
// }) 
//MAP
// const currencies = new Map([
//   ['USD','United States dollar',],
//   ['EUR', 'EURO'],
//   ['GBP', 'Pound Sterling'],
// ]);
// currencies.forEach(function(value,key,map) {
//   console.log(`${key}:${value}`);
// });
// //set
// const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map){
//   console.log(`${value}:${value}`);
// })
// const checkDogs = function(dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0,1);
//   dogsJuliaCorrected.splice(-2);
//   //dogsJulia.slice(1,3);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   //"Dog number 1 is an adult, and is 5 years old" or a puppy ("Dog number 2 is still a puppy 🐶 ")

// dogs.forEach(function(dog, i) {
//   if(dog >= 3) {
//     console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//   }else {
//     console.log(`Dog number 2 is still a puppy 🐶`)
//   }
// })
// };
// checkDogs([3,5,2,12,7], [4,1,15,8,3]);
// checkDogs([9,16,6,8,3], [10,5,6,1,4]);
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 const eurToUSD = 1.1;
// const movementsUSD = movements.map(function(mov) {
//   return mov * eurToUSD;
//   // return 23;
// })
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUSD);
// console.log(movementsUSDfor);
// const movementDescriptions = movements.map(mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i+1}: You deposited ${mov}`;
//   }else {
//     return `Movement ${i+1}: You withdrew ${Math.abs(mov)}`;
//   }
// }
  // const user = 'Steven Thomas Williams'; //username could br stw
  // const username = user
  //   .toLowerCase()
  //   .split('')
  // // .map(function(name) {
  // //   return name[0];
  //    .map(name => RETURN name[0]);
  //    .join('');


  // console.log(username);
  //THE FILTER METHOD
// const deposits = movements.filter(function(mov){
//   return mov>0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for(const mov of movements) if (mov>0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov<0);
// console.log(withdrawals);

// //The reduce method
// console.log(movements);

// //accumulator -> snowball
// const balance = movements.reduce (function(acc,cur,i,arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// const balance = movements.reduce((acc, cur) => acc + cur,0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// //MAXIMUM VALUE
// const max = movements.reduce((acc, mov) => {
//   if(acc > mov)
//     return acc;
//   else
//     return mov;
// }, movements[0]);
// console.log(max);
// const calcAverageHumanAAge = function(ages) {
//   const humanAges = ages.map(age => age <= 2 ? 2 *
//     age : 16 + age * 4);
//     console.log(humanAges);
//     const adults = humanAges.filter(age => age >= 18)
//     console.log(humanAges);
//     console.log(adults);

//     // const average = reduce((acc, age) => acc + age,0) / adults.length;
//     const average = adults.reduce((acc, age, i, arr) => acc + age/arr.length,0);

//     //2 3. ((2+3)/2 = 2.5 === 2/2+3/2 =2.5)
//    return average;
// }
// const avg1 = calcAverageHumanAAge([5,2,4,1,15,8,3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// movements.filter()
//The Some and Every method
// console.log(movements);
//  //EQUALITY
// console.log(movements.includes(-130));
// //SOME:CONDITION
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// //EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// //Seperate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// //THE FLAT METHOD
// const arr = [[1,2,3], [4,5,6], 7,8];
// console.log(arr.flat());
// const arrDeep = [[1,2,3], [4,5,6], 7,8];
// console.log(arrDeep.flat());

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov,0);
// console.log(overallBalance);
 
// const overallBalance = accounts
// .map(acc => acc.movements)
// .flat()
// .reduce((acc,mov) => acc + mov, 0);
// console.log(overallBalance);

// //flatMap
// const overallBalance2 = accounts
// .flatMap() (acc => acc.movements)
// .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);
// //Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// //Numbers
// console.log(movements);
//return < 0,A,B(keep order)
//return > 0,B,A(switch order)

//ASCENDING
// movements.sort((a,b) => {
//   if(a>b) return 1;
//   if(b>a) return -1;
// });

// console.log(movements);

// //DESCENDING
// movements.sort((a,b) => {
//   if (a>b) return -1;
//   if (a<b) return 1;
// })
// console.log(movements);

// const arr = [1,2,3,4,5,6,7];
// console.log(new Array(1,2,3,4,5,6,7));

// //Empty arrays + fill method
// const x = new Array(7);
// console.log(x);
// //console.log(x.map(() => 5));
// x.fill(1);
// x.fill(1,3,5);
// console.log(x);


// arr.fill(23,2,6);
// console.log(arr);

// //Array.from
// const y = Array.from({length: 7}, () => 1);
// console.log(y);

// const z = Array.from({length: 7}, (_,i) => i+1);
// console.log(z);

// labelBalance.addEventListener('click', function(){
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements_value'),
//     el => Number(el.textContent.replace('€',''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements_value')];

// });

const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov>0)
.reduce((sum,cur) => sum + cur, 0);

console.log(bankDepositSum);

//2.
//const numberDeposits1000 = accounts
// .flatMap(acc.movements)
//.filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count,cur) =>(cur >= 1000 ? count + 1 : count), 0);
  .reduce((count,cur) =>(cur >= 1000 ? count ++: count), 0);

  console.log(numDeposits1000); 

  //prefix ++ operator
  let a = 10;
  console.log(++a);
  console.log(a);

  //3.
  const {deposits,withdrawals} = accounts
    .flatMap(acc => acc.movements)
    .reduce(
      (sums,cur) => {
        //cur > 0? (sums, deposits += cur) ; (sums.withdrawals += cur);
        sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
        return sums;
      },
      {deposits: 0, withdrawals : 0}
    );

    console.log(deposits, withdrawals);

    //4.
    //this is a nice title -> This Is a Nice Title
    const convertTitleCase = function (title){
      const expectations = ['a','an', 'the', 'but', 'or','on', 'in', 'with' ];
      const titleCase = title 
        .toLowerCase()
        .split('')
        // .map(word => word[0].toUpperCase() + word.slice(1));
        .map(word => 
          expectations.includes(word) ? word : word[0], toUpperCase() + word.slice(1))
        }
        join('');
        return capitalize();

    console.log(convertTitleCase('thid is a nice title'));
    console.log(convertTitleCase('this is a LONG title but not too long'));
    console.log(convertTitleCase('and here is another title with an EXAMPLE'));

    //CODING CHALLENGE
    const dogs = [
      {weight: 22, curFood:250,owners:['Alice','Bob']},
      {
        weight: 8, curFood:200, owners: ['Matilda']
      },
      {weight:13, curFood:275, owners: ['Sarah','John']},
      {weight:32, curFood:340, owners: ['Michael']},
    ]
//1.
dogs.forEach(dog =>(dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)) );

//2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

//3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4.
"Matilda and Alice and Bob's dogs eat too much!"
"Sarah and John and Michael's dogs eat tooo little!"
console.log(`${ownersEatTooMuch.join('and')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join('and')}'s dogs eat too little!`);

//5.
console.log(dogs.some(dog => dog.recFood));

//6.
//current > (recommended * 0.90) && current<(recommended * 1.10)
console.log(dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1));
console.log(dogs.some(checkEatingOkay));
//7.
console.log(dogs.filter)(checkEatingOkay);

//8.
//sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a,b) => a.recFood - b.recFood);
console.log(dogsSorted);
