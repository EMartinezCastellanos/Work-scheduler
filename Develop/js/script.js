var update = function(){
    $('#currentDay').text(moment().format("dddd MMMM, MM YYYY h:mm:ss a"));
}
setInterval(update,1000);