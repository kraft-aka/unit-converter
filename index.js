// (function () {

// })()

let count = 10000000;

let num = document.getElementById('unit-number');
num.textContent = count;
const lengthMeterToFeet = document.querySelector('#meter-to-feet');
const lengthFeetToMeter = document.querySelector('#feet-to-meter');
const volumeLiterToGallon = document.querySelector('#liter-to-gallon');
const volumeGallonToLiter = document.querySelector('#gallon-to-liter');
const massKilogramToPound = document.querySelector('#kilogram-to-pound');
const massPoundToKilogram = document.querySelector('#pound-to-kilogram');



// incremet unit counter 
function increment() {
  count = count + 1
  num.textContent = count
}

// refresh the counter and set it to 0
function refresh() {
  count = 0
  num.textContent = count;
}


// convert meters to feets
function meterTofeet() {
  //return num * 3.2808
  let feet = Math.round((count * 3.2808)*1000) / 1000
  lengthMeterToFeet.textContent = count + ' meters = ' + feet + ' feets'
}


// convert feets to meters
function feetToMeter() {
  let meter = Math.round((count * 0.3048) * 1000) / 1000
  lengthFeetToMeter.textContent = count + ' feets = ' + meter + ' meters'
}

// convert liters to gallons
function literTogallon() {
  let gallon = Math.round((count * 0.264172)*1000) / 1000
  volumeLiterToGallon.textContent = count + ' liters = ' + gallon + ' gallons'
}

// convert gallons to liters
function gallonToliter() {
  let liter = Math.round((count * 3.785412) * 1000) / 1000
  volumeGallonToLiter.textContent = count + ' gallons = ' + liter + ' liters'
}

// convert kilograms to pounds
function kilogramsTopounds() {
  let pound = Math.round((count / 0.45359237) *1000) / 1000
  massKilogramToPound.textContent = count + ' kilograms = ' + pound + ' pounds'
}

// convert pounds to kilograms
function poundsTokilograms() {
  let kilogram = Math.round((count * 0.45359237) * 1000) / 1000
  massPoundToKilogram.textContent = count + ' pounds = ' + kilogram + ' kilograms'
}

meterTofeet()
feetToMeter()
literTogallon()
gallonToliter() 
kilogramsTopounds()
poundsTokilograms()


