 
var  timeCalculation = function(remiderDate,reminderHr,reminderMin){
    
        today = new Date();
        var currdd = today.getDate();
        var currmm = today.getMonth(); //January is 0!
        var curryyyy =today.getFullYear();
        if(currdd<10) {
            currdd='0'+currdd
        } 
        if(currmm<10) {
            currmm='0'+currmm
        } 
       
        var currHrs = today.getHours();
        var currMins = today.getMinutes(); 

        var remDate=remiderDate;
        var remHr=reminderHr;
        var remMin=reminderMin;
        var remYear=parseInt(remDate.substring(0,4));
        var remMonth=parseInt(remDate.substring(5,7))-1;
        var remDay=parseInt(remDate.substring(8,10));
        // console.log(remHr);

        var currentDateTime=new Date(curryyyy,currmm,currdd,currHrs,currMins);
        var timeStart = new Date(currentDateTime).getTime();

        var reminderDateTime=new Date(remYear,remMonth,remDay,remHr,remMin);
        var timeEnd = new Date(reminderDateTime).getTime();

        var hourDiff = timeEnd - timeStart; //in ms
        var secDiff = hourDiff / 1000; //in s
        var minDiff = hourDiff / 60 / 1000; //in minutes
        var hDiff = hourDiff / 3600 / 1000; //in hours
        var humanReadable = {};
        humanReadable.hours = Math.floor(hDiff);
        humanReadable.minutes = minDiff - 60 * humanReadable.hours;
        humanReadable.totMillisec=(humanReadable.hours*3600+humanReadable.minutes*60)*1000;
        this.totalTimeDiff=humanReadable.totMillisec;
}