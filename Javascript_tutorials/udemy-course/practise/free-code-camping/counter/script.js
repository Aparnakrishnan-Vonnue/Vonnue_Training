// 'use strict'
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const surpriseBtn = document.querySelector('.surprise')
const container = document.querySelector('.review-container')


let reviews = [
  {
    id: 1,
    name: "Peter Jones",
    job:"web developer",
    img :"https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
    text: 
    "I'm a baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up, Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    id: 2,
    name: "Henry Parker",
    job:"web designer",
    img :"https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
    text:
    "I'm a baby meggings twee health goth +1. Bicycle rights turmeric charactreuse before thet sold out chambray pop-up, Shaman humbleberg pickled coloring book salvia hoodie"
  },
  {
    id:3,
    name: "James Peter",
    job: "Intern",
    img :"https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal"
  }
]


var i=0;
function show(){
    container.innerHTML = `
    <div class="icon"><i class="fa fa-quote-right"></i></div>
    <div class="profile">
    <div class="profile-image">
    <div class="empty"></div>
    <img src="${reviews[i].img}" alt="profile" /></div>
    <p id="author">${reviews[i].name}</p>
    <span id="position">${reviews[i].job}</span>
    <p id="info">
    ${reviews[i].text}
    </p>
    </div>
    <div class="random-button">
    <button class="surprise">Surprise me</button>
    </div>
    `
    ++i
    if (i > reviews.length-1){
      i=0
    }
    //  if(i === reviews.length){
    //   i = 0
    //  }
  
  }

nextBtn.addEventListener('click', show)
prevBtn.addEventListener('click',backwards)
function backwards(){
  container.innerHTML = `
  <div class="icon"><i class="fa fa-quote-right"></i></div>
  <div class="profile">
  <div class="profile-image">
  <div class="empty"></div>
  <img src="${reviews[i].img}" alt="profile" /></div>
  <p id="author">${reviews[i].name}</p>
  <span id="position">${reviews[i].job}</span>
  <p id="info">
  ${reviews[i].text}
  </p>
  </div>
  <div class="random-button">
  <button class="surprise">Surprise me</button>
  </div>
  `
  i--
  if (i < 0){
    i=reviews.length -1
  }
  //  if(i === reviews.length){
  //   i = 0
  //  }

}

// console.log(reviews[1])
// reviews.forEach((a,idx)=>{
  //   nextBtn.addEventListener('click',() =>{
    //     console.log(a)
    //   })
    // })
    
    
    //set initial count
    
    
    //select value and buttons
    // const value = document.querySelector("#value");
    // const btns = document.querySelectorAll(".btn")
    // const decreaseBtn = document.getElementById('decrease')
    // const increaseBtn = document.getElementById("increase")
    // const resetBtn = document.getElementById("reset")
    
    // btns.forEach(function() {
      //   let count = 0;
      //   resetBtn.addEventListener('click', () => {
        //     count = 0
        //     value.innerHTML = count
        //     value.style.color = "black"

//   })
// decreaseBtn.addEventListener('click',() =>{
  //   b = count--
  //   value.innerHTML = b
  //   if(b < 0){
    //   value.style.color = "red"
    
    // }
    // })
    // increaseBtn.addEventListener('click', () =>{
      //   a = count++
      //   value.innerHTML = a
      //   if(a > 0){
        //     value.style.color = "green"
        //     }
        
        // })
        
        // })
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