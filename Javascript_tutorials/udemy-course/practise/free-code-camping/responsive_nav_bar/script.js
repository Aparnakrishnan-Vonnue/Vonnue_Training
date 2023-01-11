const nav = document.querySelector('.container-nav')
const infoList = document.querySelector('.info')
const icons = document.querySelector('.icons')
const hamburgerIcon = document.querySelector('.hamburger-icon')
var width = window.innerWidth;
var height = window.innerHeight;

hamburgerIcon.addEventListener('click', () => {
  icons.classList.toggle ('show')
  hamburgerIcon.classList.toggle('active')
})
console.log(width)
if (width < 900) {
  infoList.classList.add('hide')
}