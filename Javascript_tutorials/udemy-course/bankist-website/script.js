//SELECTING ELEMENTS
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

//CREATING AND INSERTING ELEMENTS
//insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
//message.textContent = ' We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class = "btn btn--close-cookie"> Got it! </button>';
header.prepend(message);
header.append(message);

console.log(message);

// header.prepend(message);
// header.append(message);
//header.append(message.cloneNode(true));

header.before(message);
header.after(message);

//DELETE ELEMENTS
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

//Styles
message.style.backgroundColor = "#37383d";
message.style.width = "100%";

console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

//ATTRIBUTES
const logo = document.querySelector(".nav_logo");
logo.alt = "Beautiful minimalist logo";
logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

//Data Attributes
console.log(logo.CDATA_SECTION_NODE.versionNumber);

//Classes
logo.classList.add('c','j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//Don't use
// logo.className = 'jonas';

// const hai = document.querySelector('.btn--scroll-to');
// hai.addEventListener('click', function(e){
//   const s1coords = section1.getBoundingClientReact();
//   console.log(s1coords);
//   console.log(e.target.getBoundingClientReacct());

//   console.log('Current scroll (X/Y)', window.pageXOffset, pageYoffset);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,document.documentElement.clientWidth
//   );

  // Scrolling
  // WIndow.scrollTo(
  //   s1coords.left + window.pageXoffset,
  //   s1coords.top + window.pageYoffset
  // );


// // window.scrollTo({
// //   left: s1coords.left + window.pageXOffset,
// //   top: s1coords.top + window.pageYOffset,
  // behavior:'smooth',
// // });

// section1.scrollIntoView({behavior: 'smooth'});
// });

//  const h1 = document.querySelector('h1');
//  const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
//  }

//  h1.addEventListener('mouseenter',alertH1);

//  h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');

//  setTimeout(()=> h1.removeEventListener('mouseenter', alertH1), 3000);
  
//  };

 //rgb(255, 255, 255, 255)

 const randomInt = (min,max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor =  () =>`rgb(${randomInt(150,255)}, ${randomInt(150,255)}, ${randomInt(150,255)})`;
  console.log(randomColor());
 
  document.querySelectorAll('.nav__item').forEach((ele)=>ele.addEventListener("mouseenter",function () {
    console.log(this.style.backgroundColor)
    this.style.backgroundColor = randomColor()
  }))

  document.querySelector('.nav__links').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);
  });

  document.querySelector('.nav').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  });

  document.querySelector('.nav').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  });

  //Modal Window

  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const btnCloseModal = document.querySelector('.btn--close-modal');
  const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

  const openModal = function(e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
      closeModal();
    }
  })

  //BUTTON SCROLLING
  const btnScrollTo = document.querySelector('.btn--scroll-to');
  const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientReacct());

  // console.log('Current scroll (X/Y)', window.pageXOffset, pageYoffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,document.documentElement.clientWidth
  // );

  //Scrolling
  //WIndow.scrollTo(
    //s1coords.left + window.pageXoffset
    //s1coords.top + window.pageYoffset
  //);


// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior:'smooth',
// });

section1.scrollIntoView({behavior: 'smooth'});
});

  //PAGE NAVIGATION
// document.querySelectorAll('.nav__link'),forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// })

document.querySelector('.nav__links').addEventListener('click', function(e){
  console.log(e.target);

  //MATCHING STRATEGY
  if(e.target.classList.contains('nav__link')){
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: smooth
    });
  }
});

//DOM TRAVERSING
const h1 = document.querySelector('h1');

//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going upwards:parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-seondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

//Going sideways: sibilings
console.log(h1.previousElementsSibiling);
console.log(h1.nextElementSibiling);

console.log(h1.previousSibiling);
console.log(h1.nextSibiling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el){
  if (el !== h1) el.style.transform = 'scale(1)';
});

//BUILDING A TABBED COMPONENT
  const tabs = document.querySelectorAll('.operations__tab');
  const tabsContainer = document.querySelector('.operations__tab-container');
  const tabsContent = document.querySelectorAll('.operations__content');

  tabsContainer.addEventListener('click', function(e){
    const clicked = e.target.closest('.operations__tab');
    // console.log(clicked);

    //Guard Clause
    if (!clicked) return;

    //Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active') )
    //Activate tab
    clicked.classList.add('operations__tab--active');

    //Activate content area
    // console.log(clicked.dataset.tab);
    document.querySelector(`.operations__content--${clicked.dataset  .tab}`)
    .classList.add('operations__content--active');                                                
  });
  //Menu fade animation
 
  const handleHover = function(e, opacity){
    console.log(this, e.currentTarget);
    if (e.target.classList.contains('nav__link')){
      const link = e.target;
      const sibilings = link.closest('.nav').querySelector('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      sibilings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
    
    logo.style.opacity = this;
  }nav.addEventListener('mouseover', handleHover.bind(0.5));

  nav.addEventListener('mouseout', handleHover.bind(1));
}

//Sticky Navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function(){
  console.log (window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList. remove('sticky')
});
//Sticky Navigation:Instersection Observer API
const obsCallback = function(entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  })
};

const obsOptions = {
  root:null,
  threshold:[0, 0.2],
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

// const header = document.querySelector('.header');

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold:0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//Reveal sections
// const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting)return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root:null,
  threshold: 0.15,
});

allSections.forEach(function(section){
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//LAZY LOADING IMAGES
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting)return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  });

observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg,{
  root:null,
  threshold:0,
  rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//Slider
const slides = document.querySelectorAll('.slide');slides.forEach((s,i) => (s.style.transform = `translatX(${100 * 1}%)`));
//0%, 100%, 200%, 300%