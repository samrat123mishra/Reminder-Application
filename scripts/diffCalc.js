 
var  TimeCalculation = function(remiderDate,reminderHr,reminderMin){ //responsible for time calculation
    
        var today = new Date();
        var currdd = today.getDate();
        var currmm = today.getMonth(); //January is 0!
        var curryyyy =today.getFullYear();
        if(currdd<10) {   //if date is less than 10 (such as 3rd July) then it will take as (ex:03)
            currdd='0'+currdd
        } 
        if(currmm<10) {   //if month is less than 10 (such as April(4)) then it will take as (ex:04)
            currmm='0'+currmm
        } 
       
        var currHrs = today.getHours();
        var currMins = today.getMinutes(); 
        
        var remDate=remiderDate;
        var remHr=reminderHr;
        var remMin=reminderMin;
        var b = remDate.length;
        var remYear=parseInt(remDate.substring(0,b-6)); //exm:yyyy/mm/dd; getting the the input year(ex:yyyy) out of total date (which is as a string) 
        var remMonth=parseInt(remDate.substring(b-5,b-3))-1;  //exm:yyyy/mm/dd; getting the month(ex:mm).as currmm returns starting mnth as 0 so (-1) is deducted..
        var remDay=parseInt(remDate.substring(b-2,b)); // getting the day (ex:dd)..
        var currentDateTime=new Date(curryyyy,currmm,currdd,currHrs,currMins);
        var timeStart = new Date(currentDateTime).getTime();
        var reminderDateTime=new Date(remYear,remMonth,remDay,remHr,remMin);
        var timeEnd = new Date(reminderDateTime).getTime();

        var hourDiff = timeEnd - timeStart; //in ms
        var secDiff = hourDiff / 1000; //in sec
        var minDiff = hourDiff / 60 / 1000; //in minutes
        var hDiff = hourDiff / 3600 / 1000; //in hours
        var humanReadable = {};
        humanReadable.hours = Math.floor(hDiff);
        humanReadable.minutes = minDiff - 60 * humanReadable.hours;
        humanReadable.totMillisec=(humanReadable.hours*3600+humanReadable.minutes*60)*1000; //converting the total time into millisecs
        this.totalTimeDiff=humanReadable.totMillisec;
}