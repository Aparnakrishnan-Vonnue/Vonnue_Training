// const clickMeBtn = document.querySelector('.btn')
// const popUpBtn = document.querySelectorAll('.message')

// const { divIcon } = require("leaflet")

// clickMeBtn.addEventListener('click',popUp())

// function popUp() {
  
// }
const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
]
const types = ['info', 'success', 'error']
button.addEventListener('click', ()=> createNotification('This is invalid data','success'))
function createNotification(message = null, type = null){
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : 'info')
  notif.innerText =message ? message : getRandomMessages()
  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  },3000)
}
function getRandomMessages(){
  return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomType(){
  return types[Math.floor(Math.random() * types.length)]
}