//Get current date using moment
var currentDay = moment().format('dddd, MMMM Do');

// Display current date at top of page
$('#currentDay').text(currentDay);


// Setting each timeblock for schedule using moment.js

var nineAm = moment().hour(9);
var tenAm = moment().hour(10);
var elevenAm = moment().hour(11);
var twelvePm = moment().hour(12);
var onePm = moment().hour(13);
var twoPm = moment().hour(14);
var threePm = moment().hour(15);
var fourPm = moment().hour(16);
var fivePm = moment().hour(17);

// Creating array of hour blocks
var hours = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm];

// Getting local storage or setting to empty
var events9 = JSON.parse(localStorage.getItem('nineAm')) || "";
var events10 = JSON.parse(localStorage.getItem('tenAm')) || "";
var events11 = JSON.parse(localStorage.getItem('elevenAm')) || "";
var events12 = JSON.parse(localStorage.getItem('twelvePm')) || "";
var events13 = JSON.parse(localStorage.getItem('onePm')) || "";
var events14 = JSON.parse(localStorage.getItem('twoPm')) || "";
var events15 = JSON.parse(localStorage.getItem('threePm')) || "";
var events16 = JSON.parse(localStorage.getItem('fourPm')) || "";
var events17 = JSON.parse(localStorage.getItem('fivePm')) || "";

