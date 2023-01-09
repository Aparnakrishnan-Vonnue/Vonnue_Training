let wordToCheck = 'MALAYALAM'
function checkIfPalindrome() {
  if(wordToCheck[0] === wordToCheck[-1]){
    return `${wordToCheck} is a Palindrome`
  }
}
checkIfPalindrome()