const nav = document.querySelector('.nav')
// const container = document.querySelector('.container')
// const hero = document.querySelector('.hero')

//Make javascript understand that the page is scrolled
// 2)window.onscroll = function(){scrollFunction}
// //add class active to nav using classList.add
// function scrollFunction(){
//   if (document.body.scrollTop >50){
//     // container.classList.add('active')
//     nav.classList.add("altcolor")
//   }
// }
// //1) window.addEventListner('scroll',() => {
// //   nav.classList.add('.altcolor')    
// // })

window.addEventListener('scroll',fixNav)

function fixNav(){
  if(window.scrollY > nav.offsetHeight + 50) {
    nav.classList.add('active')
  }else {
    nav.classList.remove('active')
  }
}


