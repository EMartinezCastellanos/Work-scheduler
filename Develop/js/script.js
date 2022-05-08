// $(document).ready(function (){ 
var updateTime = function(){
    $('#currentDay').text(moment().format("dddd MMMM, MM YYYY h:mm:ss a"));
}
setInterval(updateTime,1000);
//Create code to color code time blocks so that present hour is colored differently from passede hours and future hours 

// Cheack current time by assigning a variables with a value of the current hour time
function timeCheck(){
    // obtain current hour value from moment 
    var presHour = moment().hour();
    // bug check to see if it is detecting the current hour
    console.log(presHour);
}

// Create a function to save Items into the Local storage when save button is pressed 

// When Save-button is clicked run the designated function 
$('button').click(function(){
    // to variable task-text assign it the value of the buttonsd sibling text area
    var task = $(this).siblings('textarea').val();
    // to var hourValue assignt the value of the sibling div element which represents the hour 
    var hour = $(this).siblings('div').text();

    // Save the two variables into the local storage
    localStorage.setItem(hour, task);
})

//Create function to retreive saved LocalStorage items on page Load 

$("#schedule-row-1 .eventText").val(localStorage.getItem("9 am"));
$("#schedule-row-2 .eventText").val(localStorage.getItem("10 am"));
$("#schedule-row-3 .eventText").val(localStorage.getItem("11 am"));
$("#schedule-row-4 .eventText").val(localStorage.getItem("12 pm"));
$("#schedule-row-5 .eventText").val(localStorage.getItem("1 pm"));
$("#schedule-row-6 .eventText").val(localStorage.getItem("2 pm"));
$("#schedule-row-7 .eventText").val(localStorage.getItem("3 pm"));
$("#schedule-row-8 .eventText").val(localStorage.getItem("4 pm"));
$("#schedule-row-9 .eventText").val(localStorage.getItem("5 pm"));

// })
