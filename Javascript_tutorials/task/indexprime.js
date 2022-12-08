let num = 3

if (num === 1) {
    console.log(num + "is neither prime nor composite")
}

for ( let i = 1; i < num ; i++) {
    if ( num % i === 0){
        console.log(num + "is not a prime number")
    }
    else {
        console.log(num + "is a prime number")
    }
}
