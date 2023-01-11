const list = document.querySelectorAll('.list')
// console.log(list)
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 8 * 7

  list.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    if(boxTop < triggerBottom) {
      box.classList.add('show')
    }else {
      box.classList.remove('show')
    }
  })
}

lskdjs