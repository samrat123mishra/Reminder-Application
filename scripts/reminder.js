var Reminder = function (title, time, date) { //to get the formated time and date from input
    this.title = title;
    this.time = time;
    this.date = date;
    var a = this.time.length;
    this.id = Date.now();
    var hour = this.time.substring(0,a-3); //to get the hour from input time (hh:mm)
    var min = this.time.substring(a-2, a); //to get the hour from input time (hh:mm)
    hour = parseInt(hour);
    min = parseInt(min);
    var timeDiff = new TimeCalculation(this.date, hour, min);//creating the object of timecalculation class
    this.timeDiff = timeDiff.totalTimeDiff;// returns the time diffrence
}