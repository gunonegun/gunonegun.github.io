"use strict";
runClock();
setInterval("runClock()",1000)
function runClock(){
/*State the current date and time*/
var currentDay = new Date();
var dateStr= currentDay.toLocaleDateString();
var timeStr= currentDay.toLocaleTimeString();

/*Display*/
//document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";
document.getElementById("dateNow").innerHTML= dateStr + "<br />" + timeStr
}



function realTimeClock() {
    var rtClock = new Date(),
        hourS = rtClock.getHours(),
        minS = rtClock.getMinutes(),
        secS = rtClock.getSeconds();

    // Add AM and PM
    var amPm = (hourS < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format
    hourS = ("0" + hourS).slice(-2);
    minS = ("0" + minS).slice(-2);
    secS = ("0" + secS).slice(-2);

    // Display clock
    document.getElementById(`clock`).innerHTML = 
        hourS + " : " + minS + " : " + secS + " " + amPm;
    var t = setTimeout(realTimeClock, 500);
}
