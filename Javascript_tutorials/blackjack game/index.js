// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let isAlive = false
// let hasBlackJack = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// console.log(cards)

// function startGame(){
//     renderGame()
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard,secondCard]
//     sum = firstCard + secondCard
// }
// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random()*13) + 1
//     // return Math.floor(Math.random()*13) +1 
//     if(randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1) {
//         return 11
//     } else{
//         return randomNumber
//     }
// }

// function renderGame() {
//     cardsEl.textContent = "Cards:" + cards[0] + "" + cards[1]
//     sumEl.textContent ="Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card? 🤔"
//     }
//     else if (sum===21) {
//         message="Wohoo!!You've got Blackjack 🤩"
//         hasBlackJack=true
//     }
//     else  {
//         message="You are out of the Gamepad 😭"
//         isAlive=false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     if(isAlive === true && hasBlackJack === false) {
//     let card = getRandomCard()
//     sum += card
//     cards.push(card)
//    // console.log(cards)
//     renderGame()
// }
// }


// if (sum <= 20) {
//     message = "Do you want to draw a new card? 🤔"
// }
// else if (sum===21) {
//     message="Wohoo!!You've got Blackjack 🤩"
//     hasBlackJack=true
// }
// else  {
//     message="You are out of the Gamepad 😭"
//     isAlive=false
// }
// Cash out!
// console.log(hasBlackJack)


// // let age=70
// // if (age < 100){
// //     console.log("Not eligible")
// // }
// // else if(age === 100){
// //     console.log("Here is your birthday card from the king!")
// // }
// // else{
// //     console.log("Not eligible, you have already gotten one")
// // }  
// let isAlive = true
// console.log(isAlive)

// console.log(4 === 3 ) //false
// console.log(5 > 2) //true
// console.log(12 > 12) //false
// console.log(3 < 0) //false
// console.log(3 >= 3) //true
// console.log(11 <= 11) //true
// console.log(3 <= 2) //false

// console.log(message)


// let player1Time = 102
// let player2Time = 107


// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if(player2Time< player1Time){
//         return player2Time
//     } else {
//         return player1Time
//     }
// }
// let fastestRace = getFastestRaceTime()
// function getTotalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()

// console.log(totalTime)



// let flooredNumber = Math.floor(Math.random()*6)

// console.log(flooredNumber)

// function rollDice() {
//     let randomNumber = Math.floor(Math.random()*6) + 1

//     return randomNumber
// }
// console.log(rollDice())

// let hasCompletedCourse =true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//       generateCertificate()

// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// let hasSolvedChallenge =false
// let hasHintsleft =false

// if (hasSolvedChallenge === false && hasHintsleft ===false) {
//     showSolution()
// }
// function showSolution(){
//     console.log("Showing the solution...")
// }

// let hasCompletedCourse =true
// let givesCertificate = true

// if (hasCompletedCourse === true || givesCertificate === true) {
//       generateCertificate()

// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }
// let likesDocumentaries = true 
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendedMovie()
// }
// function recommendedMovie(){
//     console.log("Hey, checkout this new film we think you will like!")
// }

let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl= document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// let player = {
    // let playerName :"Per",
    // let playerChips: 145
//     name: "Per",
//     chips: 145,
//     sayHello: function(){
//         console.log("Heisann!")
//     }
// }
// player.sayHello()

// let playerEl = document.getElementById ("player-el")
// console.log(playerEl)
// playerEl.textContent = player.name + ":$" + player.chips
// playerEl.textContent = player.name + ": $" + player.chips

// function getRandomCard(){
//     let randomNumber = Math.floor (Math.random()*13)+1
//     if (randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1) {
//         return 11
//     } else {
//         return randomNumber
//     }
// }

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length:63,
//     level: 2,
//     isFree: true,
//     tags:["html", "css"]
// }
// console.log(course.tags)

// let castle = {
//     title: "Live like a king in my castle",
//     price: 190,
//     isSuperhost: true,
//     images: ["img/castle1.png", "img/castle2.png"]
// }
// console.log(castle.price)
// console.log(castle.images)
// console.log(castle.isSuperhost)

// let person = {
//     name: "Aparna Krishnan",
//     age: 24,
//     country: "India"
// }
// function logData() {
//     console.log(person.name + "is" + person.age + "years old and lives in" + person.country)
// }

// let age = 

// if (age < 6) {
//     console.log("free")
// } else if (6 <= age <= 17) {
//     console.log("child-discount")
// }else if (18 <= age <=26){
//     console.log("student discount")
// } else if(27 <= age <= 66) {
//     console.log("full price")
// }else{
//     console.log("senior citizen discount")
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monacco"]
// console.log("The largest countries in the world are: ")
// for( let i=0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }
// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)

// let dayOfMonth = 13
// let weekday = "Friday"

// if(dayOfMonth === 13 && weekday ==="Friday") {
//     console.log("😱")
// }

// let hands = ["rock", "paper", "scissor"]
// function getHand(){
//     let randomIndex =Math.floor( Math.random() * 3)
//     return hands[randomIndex]
// }
// console.log(getHand())

// let fruit = ["🍎","🍊","🍎","🍎","🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// function sortFruit() {
//     for (let i=0; i<fruit.length; i++){
//         if (fruit[i] === "🍎"){
//             appleShelf.textContent += "🍎"
//         } else if(fruit[i] === "🍊") {
//             orangeShelf.textContent += "🍊"
//         }
//     }
// }
let inputBtn = document.getElementById("input-btn")
// function saveLead() {
//     console.log("Button clicked from onclick attribute")
// }
// // let inputBtn = document.getElementById("input-btn")
// // inputBtn.addEventListener("click", function(){
// //     console.log("Button  clicked from addEventListener")
// // })
// let box = document.getElementById("box")
// box.addEventListener("click", function() {

//     console.log("I want to open the box!")

// })

// const baseprice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

// shippingCost = 15
// shippingTime = "7-14 days"

// let fullPrice = basePrice - discount + shippingCost
// console.log("Total cost:" + fullPrice+".it will arrive in " + shippingTime)

//  let myLeads = []
//  const inputEl = document.getElementById("input-el")
//  const inputBtn = document.getElementById("input-btn")
//  inputBtn.addEventListener("click", function(){
//     // console.log("Button clicked!")
//     myLeads.push("www.awesomelead.com")
//  })

//  const ulEl = document.getElementById("ul-el")

//  console.log(ulEl)

 for (let i=0; i< myLeads.length; i++) {
    // console.log(myLeads[i])
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
 }
const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'>Buy!</Button>"
function buy(){
    container.innerHTML = "<p>Thankyou for buying!</p>"
} 