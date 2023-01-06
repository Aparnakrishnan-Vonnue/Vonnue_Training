const container = document.querySelector('.container'
)
const imageColumn = document.querySelector('.image-column')
const textColumn = document.querySelector('.text-column')
const btnUp = document.querySelector('.btnup')
const btnDown = document.querySelector('.btndown')
const slidesLength = imageColumn.querySelectorAll('div').length
const slides = imageColumn.querySelectorAll('div')

// let activeSlide = 0

// btnUp.addEventListener('click', () => {
//   activeSlide++
//   if(activeSlide > slidesLength - 1) {
//     activeSlide = 0
//   }
//   setActiveSlideImage()
//  })
//    function setActiveSlideImage() {
//     slides.forEach((image) =>
//      image.classList.remove('active'))
//      image[activeSlide].classList.add('active')
//   };

// console.log(imageColumn)

let activeSlideIndex = 0

textColumn.style.top = `-${(slidesLength - 1) * 100}vh`
btnUp.addEventListener('click', () => changeSlide('up'))
btnDown.addEventListener('click',() => changeSlide('down'))

const changeSlide = (direction) => {
  const sliderHeight = container.clientHeight
  if(direction === 'up'){
    activeSlideIndex++
    if(activeSlideIndex > slidesLength -1) {
      activeSlideIndex = 0
    }
   
    imageColumn.style.transform =  `translateY(-${activeSlideIndex * sliderHeight}px)`
    textColumn.style.transform =  `translateY(${activeSlideIndex * sliderHeight}px)`
  }
  if(direction === 'down'){
    activeSlideIndex--
    if(activeSlideIndex < 0) {
      activeSlideIndex = slidesLength -1
    }
    imageColumn.style.transform =  `translateY(-${activeSlideIndex * sliderHeight}px)`
    textColumn.style.transform =  `translateY(${activeSlideIndex * sliderHeight}px)`
    
  }


  //i.e if activeSlideIndex = 0, transformation = 0, if activeSlideIndex =1, transformation = 948, 
}
 //else if (direction === 'down') {
    //   activeSlideIndex--
    //   if(activeSlideIndex < 0) {
    //     activeSlideIndex = slidesLength-1
    //   }
    // }