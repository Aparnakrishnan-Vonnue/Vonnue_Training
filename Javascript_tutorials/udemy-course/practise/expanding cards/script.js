// const images = document.querySelectorAll('.image')
// images.forEach((image) =>{
//   image.addEventListener('click',() =>{
//     removeActiveClass()
//     image.classList.add('active')
//   })
// })
// function removeActiveClass(){
//   images.forEach((image) =>{
//     image.classList.remove('active')
//   })
//   }
//------------------------------------------------------
//   const bg = document.querySelector('.background')
//   const loadText = document.querySelector('.loadtext')

const { forEach } = require("lodash-es")

// let load = 0
// let int = setInterval(blur, 30)
//  function blur(){
//   load++
//   loadText.innerText = `${load}%`
//   if(load>99){
//     clearInterval(int)
//   }
//   loadText.style.opacity = 1 - load/100
//   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
//  }
//  const scale = (number, inMin, inMax, outMin, outMax) =>{
//   return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }
//-------------------------------------------------------
// const input = document.querySelector('.input')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//   input.classList.toggle('active')
//   btn.classList.toggle('active')
// })
// ----------------------------------------------------

// const toggle = document.getElementById("toggle")
// const nav = document.getElementById("nav")
// toggle.addEventListener("click", () => nav.classList.toggle("active"))
//----------------------------------------------------
const counters = document.querySelectorAll('.counter')
counters.forEach(counter => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target ')
    const c = +counter.innerText

    const increment = target / 1200
    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter,1)
    }else {
      counter.innerText = target
    }
  }
  updateCounter()
})