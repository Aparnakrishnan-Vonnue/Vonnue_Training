//set initial count


//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")
const decreaseBtn = document.getElementById('decrease')
const increaseBtn = document.getElementById("increase")
const resetBtn = document.getElementById("reset")

btns.forEach(function() {
  let count = 0;
decreaseBtn.addEventListener('click',() =>{
  c = count--
  value.innerHTML = c
})
increaseBtn.addEventListener('click', () =>{
  c = count++
  value.innerHTML = c
})
resetBtn.addEventListener('click', () => {
  c = 0
  value.innerHTML = c
})
})
// increaseBtn.addEventListener('click',() =>{
//   count++
//   value.innerHTML = count

// })


// btns.forEach(function (btn) {
//   btn.addEventListener("click", function(e) {
//     const styles = e.currentTarget.classList;
//     if(styles.contains("decrease")){
//       count --;
//     }else if(styles.contains("increase")){
//       count++;
//     }else {
//       count = 0;
//     }
//     value.textContent = count;
//   })
// })