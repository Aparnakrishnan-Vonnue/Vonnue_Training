let num1 = 15
let num2 = 3
let num3 = 10
let resultEl = document.getElementById("result-el")
let message = ""

function start() {
if(num1 > num2 && num1 > num3) {
   console.log(num1 + "is the greatest")
   message = num1 + "is the greatest."
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2 + "is the greatest") 
    message = num2 + "is the greatest"
}
else{
    console.log(num3 + "is the greatest")
    message = num3 + "is the greatest"
}
resultEl.textContent = message
}