let num = 1
let resultEl = document.getElementById("result-el")
let message = ""
function find() {
for (i=1; i<num; i++) {
    if (i === 1){
        message = num +" " + "is neither prime nor composite"
    }
    else if (i%n === 0){
        message = num +" " + "is not a prime number"
    }
    else{
        message = num + " " + "is a prime number"
    }
    resultEl.textContent = message
}
}