//Get current date using moment
var currentDay = moment().format('dddd, MMMM Do');

// Display current date at top of page
$('#currentDay').text(currentDay);
