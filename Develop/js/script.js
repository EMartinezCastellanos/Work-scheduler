var updateTime = function(){
    $('#currentDay').text(moment().format("dddd MMMM, MM YYYY h:mm:ss a"));
}
setInterval(updateTime,1000);

//Create code to color code time blocks so that present hour is colored differently from passede hours and future hours 

// Create a function to save Items into the Local storage when save button is pressed 

//Create function to retreive saved LocalStorage items on page Load 
