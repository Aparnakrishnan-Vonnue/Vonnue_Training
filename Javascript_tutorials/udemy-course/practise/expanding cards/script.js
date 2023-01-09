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
