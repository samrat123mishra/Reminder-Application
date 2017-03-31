var reminder = function (title, time, date) {
    this.title = title;
    this.time = time;
    this.date = date;
    this.id = Date.now();
    var hour = this.time.substring(0, 2);
    var min = this.time.substring(3, 5);
    hour = parseInt(hour);
    min = parseInt(min);
    var timeDiff = new timeCalculation(this.date, hour, min);//creating the object of timecalculation class
    this.timeDiff = timeDiff.totalTimeDiff;// returns the time diffrence
}