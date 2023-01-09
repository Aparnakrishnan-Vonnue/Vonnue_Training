const x = 'malayalamm'
let palindrome = true
// console.log(x[x.length -2])
// const array = x.split("")
// console.log(array['-1'])

 for(i = 0,j=1; i < x.length-j; i++,j++){
   if(x[i]===x[x.length -j]){
   }else {
    palindrome=false
   }
  // console.log(i,j)
 }

 if(palindrome === true){
  console.log(`${x} is  a palindrome`)
 }else{
  console.log(`${x} is not a palindrome`)
 }
//  if(x[0] === x[(x.length)/2]){
//   return;
// }0