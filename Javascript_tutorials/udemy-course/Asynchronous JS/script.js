"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country" ${className}>
        <img class="country__img" src="${data.flag}">
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 100000
          ).toFixed(1)}people</p>

          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>

          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        </div>
      </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// // const getCountryAndNeighbour = function(country) {

// //   //AJAX call country 1
// //  const request = new XMLHttpRequest();
// //  request.open('GET',`https://restcountries.com/v2/name/${country}`);
// //  request.send();

// // //  console.log(request.responseText);

// //  request.addEventListener('load', function(){
// //   const [data] = JSON.parse (this.responseText);
// //   console.log(data);

// //   // render country 1
// //   renderCountry(data);

// //   //Get neighbour country
// //   const [neighbour] = data.borders;
// //   if(!neighbour)return;

// //   //AJAX call country 2
// //   const request2 = new XMLHttpRequest();
// //  request2.open('GET',`https://restcountries.com/v2/alpha/${neighbour}`);
// //  request2.send();

// //   request2.addEventListener('load', function() {
// //     const data2 = JSON.parse(this.responseText);
// //     console.log(data2);

// //     renderCountry(data2, 'neighbour');
// //   })
// //  })
// // };
// // getCountryAndNeighbour('Sri lanka');
// // // getCountryData('usa');
// // // getCountryData('India')

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout (() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed')
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

// const request = fetch('https://restcountries.com/v2/alpha/portugal');
//  console.log(request);

// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.com/v2/name/${country}`)
// //    .then(function(response){
// //     console.log(response);
// //     return response.json();
// //   })
// //   .then(function(data) {
// //     console.log(data);
// //     renderCountry(data[0]);
// //   })
// // };

// const renderError = function(msg){
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// }

// // const getJSON = function (url, errorMsg = 'Something went wrong')
// // return fetch(url).then(response => {
// //   if(!response.ok) throw new Error (`${errorMsg} (${response.ststus})`);
// //   return response.json();
// // })
// // };
// const getCountryData = function (country) {
//   //Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)

//    .then((response) => {
//     console.log(response);

//     if(!response.ok)
//     throw new Error(`Country not found ${response.status}`)
//     return response.json(),
//   //  err => alert(err)
// })
//   .then(data => {

//     renderCountry(data[0]);
//     const neighbour = data[0].borders[0]

//     if(!neighbour) return;

//     //Country 2
//      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     // return 23;
//   })
//   // .then(data => alert(data));
//   .then(response => response.json())
//   .then(data => renderCountry(data, 'neighbour' ))
//   .catch(err => {
//     console.error(`${err}💥 💥 💥`)
//     renderError(`Something went wrong 💥 💥 ${err.message}.Try again!`)
//   });

//   .finally(() => {
//     countriesContainer.style.opacity = 1;
//   })
// };
// // getCountryData('portugal');
// // getCountryData('germany');

// btn.addEventListener('click', function(){
//   getCountryData('portugal');
// })

// getCountryData('dsfddsfsdf');

// CODING CHALLENGE
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok)
//         throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message} 💥 `));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res =>
//   console.log(res));

//   Promise.resolve('Resolved promise 2').then(res => {
//     for (let i = 0; i < 10000000000; i++) {}
//       console.log(res);
//   })
//   console.log('Test end');

// const lotteryPromise = new Promise (function (resolve, rejct) {

//     console.log('Lotter draw is happening 🔮');
//     setTimeout(function() {
//   if(Math.random() >= 0.5) {
//     resolve('You win 💰')
//   }else {
//     reject ( new Error()'You lost your money 💩')
//   }, 2000)
// });

// const lotteryPromise = new Promise(function (resolve, reject) {

//   console.log('Lotter draw is happening 🔮');
//   setTimeout(function() {
//     if(Math.random() >= 0.5) {
//       resolve('You win 💰');
//     }else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000)
// });

// lotteryPromise.then(res => console.log(res)).catch (err => console.error(err));

// //Promisifying setTimeout
// const wait = function(seconds) {
//   return new Promise(function(resolve) {
//     setTimeout(resolve, seconds * 1000);
//   })
// }
// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })

//   .then(() => console.log('I waited for 1 second ')) ;

//   wait(1)
//     .then(() => {
//       console.log('1 second passed');
//       return wait(1);
//     })
//     .then(()=> {
//       console.log('2 seconds passed');
//       return wait(1);
//     })
//     .then(() => {
//       console.log('3 seconds passed');
//       return wait(1)
//     })

//     .then(() => console.log('4 seconds passed')) ;
//   setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout (() => {
//       console.log('2 seconds passed');
//       setTimeout(() => {
//         console.log('3 seconds passed');
//         setTimeout(() => {
// //           console.log('4 seconds passed')
// //         }, 1000)
// //       }, 1000)
// //     }, 1000)
// //   }, 1000)

// //   Promise.resolve,('abc').then(x => console.log(x));
// //   // Promise.reject('abc').then((x => console.error(x)));
// //   Promise.reject(new Error('Problem')).catch(x => console.error(x));

// //   navigator.geolocation.getCurrentPosition(
// //   position => console.log(position),
// //   err => console.error(err)
// //   );
// //   // console.log('Getting Position');
// //   const getPosition = function() {
// //     return new Promise(function (resolve, reject) {
// //       navigator.geolocation.getCurrentPosition(
// //         position => console.log(position),
// //         err => console.error(err)
// //       );
// //     navigator.geolocation.getCurrentPosition(resolve, reject)
// //     });
// //   };

// //   // getPosition().then(pos => console.log(pos));

// //   const whereAmI = function (lat, lng) {
// //     getPosition()
// //       .then(pos => {
// //       const {latitude : lat,  longitude : lng} = (pos.coords);

// //       return fetch (`https://geocode.xyz/${lat}, ${lng}?geoit=json`)
// //     })
// //     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
// //       .then((res) => {
// //         if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
// //         return res.json();
// //       })
// //       .then(res => {
// //         if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
// //         return res.json();
// //       })

// //       .then((data) => {
// //         console.log(data);
// //         console.log(`You are in ${data.city}, ${data.country}`);

// //         return fetch(`https://restcountries.com/v2/name/ ${data.country}`);
// //       })
// //       .then((res) => {
// //         if (!res.ok)
// //           throw new Error(`Country not found (${res.status})`);

// //         return res.json();
// //       })
// //       .then((data) => renderCountry(data[0]))
// //       .catch((err) => console.error(`${err.message} 💥 `));
// //   };

// //   btn.addEventListener('click', whereAmI);

// //   //coding challenge
// //   const imgContainer = document.querySelector('.images');

// //   const createImage = function(imgPath) {
// //     return new Promise(function (resolve, reject) {
// //       const img = document.createElement('img');
// //       img.src = imgPath;

// //       img.addEventListener('load', function(){
// //         imgContainer.append(img)
// //         resolve(img);
// //       });

// //       img.addEventListener('error', function() {
// //         reject(new Error('Image not found'))
// //       })
// //     })
// //   }
// //   let currentImg;

// //   createImage('img/img-1.jpg')
// //    .then(img => {
// //     currentImg = img;
// //     console.log('Image 1 loaded ') ;
// //     return wait(2)
// //   })

// //   .then(() => {
// //     currentImg.style.display = 'none';
// //     return createImage('img/img-2.jpg');
// //   })

// //   .then(img => {
// //     currentImg = img;
// //     console.log( ' Image 2 loaded');
// //     return wait(2);
// //   })

// //   .then(() =>{
// //     currentImg.style.display = 'none'
// //   })

// //   .catch(err => console.error(err));

// const getPosition = function (){
//   return new Promise(function(resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   });
// };

// const whereAmI = async function (country) {
//   const pos = await getPosition();
//   const {latitude: lat, longitude: lng} = pos.coords;

//   //Reverse geocoding
//   const resGeo = await fetch(`https://geocode.xyz/${lat}, ${lng}?geoit = json`);
//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);
//   //country data

//   // fetch(`https://restcountries.com/v2/name/ ${country}`).then((res) =>
//   //   console.log(res)
//   // );
//   const res = await fetch(`https://restcountries.com/v2/name/ ${country}`);
//   // console.log(res);
//   const data = await res.json();
//   console.log(data);
//   renderCountry(data[0]);
// };

// console.log('1. Will get location')
// const city =  whereAmI ();
// console.log(city);
// console.log("2.Finished getting location");

// // try{
// //   let y = 1;
// //   const x = 2;
// //   y = 3;
// //  } catch (err) {
// //   alert(err.message);
// //  }

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const [data1] = await getJSON(`https://restcountries.com/v2/name/ ${c1}`);
//     const [data2] = await getJSON(`https://restcountries.com/v2/name/ ${c2}`);
//     const [data3] = await getJSON(`https://restcountries.com/v2/name/ ${c3}`);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/ ${c1}`),
//       getJSON(`https://restcountries.com/v2/name/ ${c2}`),
//       getJSON(`https://restcountries.com/v2/name/ ${c3}`),
//     ]);
//     console.log(data.map((d) => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries("portugal", "Canada", "Tanzania");

//Promise.race
// (async function (){
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),

//     getJSON(`https://restcountries.com/v2/name/egypt`),

//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);

//   console.log(res[0]);

// }) ();

// const timeout = function (sec) {
//   return new Promise(function(_,reject){
//     setTimeout(function () {
//       reject(new Error('Requesst took too long!'));
//     },sec);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v2/name/tanzania`),
//   timeout(0.15),
// ])

// .then(res => console.log[0]);
// // .catch(err => console.error(err));

// //Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve ('Another Success'),
// ]) 
//   .then (res => console.log(res));

//   Promise.all([
//     Promise.resolve('Success'),
//     Promise.reject('Error'),
//     Promise.resolve ('Another Success'),
//   ]) 
//     .then (res => console.log(res));

