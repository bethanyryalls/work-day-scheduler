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




// Displaying all timeblocks
// for each hour in hours array
$.each(hours, function(index, value) {
    // set events array to store all event items
    events = [events9, events10, events11, events12, events13, events14, events15, events16, events17];

    // create row div with class row
    var row = $('<div>').addClass('row');
    // create div to hold the time with span that holds the hour and AM/PM
    var timeCol = $('<div>').addClass('hour col-1 text-right pt-3 pr-1').append('<span>' + value.format('hA') + '</span>');
    // create text area for event column
    // include event item from local storage if there
    var textArea = $('<textarea>' + events[index] + '</textarea>').addClass('col-12');
    // create div for event input
    // add timeblock id for reference
    var eventCol = $('<div>').attr('id', (index + 9)).addClass('col-10 timeblock')
    .css({'display':'flex', 'padding-right':'0px', 'padding-left':'0px'}).append(textArea);
    // create div for save button
    var saveBtn = $('<button>').addClass('saveBtn col-1').append('<i class="fas fa-save"></i>');

    // add all columns to row
    $(row).append(timeCol).append(eventCol).append(saveBtn);
    // add row to container
    $('.container').append(row);
});

// Assigning colours based on time

// assigning const to the element with class timeblock
const timeblocks = $('.timeblock');
// setting current hour to the 24hour time format
let currentHour = parseInt(moment().format('H'));
//make array from all elements with timeblock class and for each div do...
Array.from(timeblocks).forEach(div => {
    // set variable for id on each div
    let blockIdStr = div.id;
    let blockHour;

    // if timeblock has an id
    if (blockIdStr) {
        // set blockHour to the number in that id
        blockHour = parseInt(blockIdStr);
    }
    // if div has id
    if (blockHour) {
        // if the current hour is equal to the hour in the timeblock's id
        if (currentHour === blockHour) {
            // add class 'present' to the current div - setting the color to red
            $(div).addClass('present');
            // add class 'past' to the current div if current hour is more than blockHour
        } else if ((currentHour > blockHour)) {
            $(div).addClass('past');
            // add class 'future' to current div if current hour is less than blockHour
          } else if ((currentHour < blockHour)) {
            $(div).addClass('future');
            
          } 
    }
});
