// added the ability to display the current time and set that current time display on the currentday id in HTMl doc
        // Time will be updated every second as to maintain accuracy 
var updateTime = function(){
    $('#currentDay').text(moment().format("dddd MMMM, MM YYYY h:mm:ss a"));
}
setInterval(updateTime,1000);

// Cheack current time by assigning a variables with a value of the current hour time
function timeCheck(){
    // obtain current hour value from momentJS 
    var presHour = moment().hour();
    // bug check to see if it is detecting the current hour
    // console.log(presHour);
    
    // Grab element of schedule row and run a function for each of these elements 
    $('.eventText').each(function (){
    //   Create a variable from the sched-row class by grabbing the id "hourx" for each sched-row attribute and pass that value by isolatin the number next to the hourx id 
        var eventHour = parseInt($(this).attr("id").split("hour")[1]); 

        //cheack to see if valuye of sched-row is less than value of presHour
        // will assign a class to each time-slot depending on whether it is the current hour or not  
        if (eventHour < presHour){
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");    
        }
        else if (eventHour > presHour){
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
        else { 
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }

    })
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

//Will use Jquery to call items from local storage and place them on the page

$("#schedule-row-1 .eventText").val(localStorage.getItem("9 am"));
$("#schedule-row-2 .eventText").val(localStorage.getItem("10 am"));
$("#schedule-row-3 .eventText").val(localStorage.getItem("11 am"));
$("#schedule-row-4 .eventText").val(localStorage.getItem("12 pm"));
$("#schedule-row-5 .eventText").val(localStorage.getItem("1 pm"));
$("#schedule-row-6 .eventText").val(localStorage.getItem("2 pm"));
$("#schedule-row-7 .eventText").val(localStorage.getItem("3 pm"));
$("#schedule-row-8 .eventText").val(localStorage.getItem("4 pm"));
$("#schedule-row-9 .eventText").val(localStorage.getItem("5 pm"));


timeCheck();