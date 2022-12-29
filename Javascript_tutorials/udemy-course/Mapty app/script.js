"use strict";
// class Workout {
//   date = new Date();
//   id = (Date.now() + "").slice(-10);
//   clicks = 0;

//   constructor(coords, distance, duration) {
//     //this.date = ...
//     //this.id = ...
//     this.coords = coords; //[lat, lng]
//     this.distance = distance; // in km
//     this.duration = duration; //in min
//   }

//   _setDescription() {}
// }
//prettierignore
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input---elevation");

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude]

      const map = L.map("map").setView(coords, 13);
      // console.log(map);


      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        .openPopup();

        map.on('click',function(mapEvent){
          console.log(mapEvent);
        } )
    },
    function () {
      alert("Could not get your position");
    }
  );
