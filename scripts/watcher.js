var watch = function () {  //watch function watches the current time and date with the user input time and date...
    this.watcher = function (timeArr, Arrtitle, Arrid, Arrdate) {
        setInterval(function () {
            var today = new Date();
            var currHrs = today.getHours();
            var currMins = today.getMinutes();
            var currdd = today.getDate();
            var currmm = today.getMonth() + 1; //January is 0 so it is incremented by 1...!
            var curryyyy = today.getFullYear();
            if (currdd < 10) {   //if date is less than 10 (such as 3rd July) then it will take as (ex:03)
                currdd = '0' + currdd
            }
            if (currmm < 10) {   //if month is less than 10 (such as April(4)) then it will take as (ex:04)
                currmm = '0' + currmm
            }
            if (currMins < 10) {
                currMins = "0" + currMins;
            }
            var currTime = currHrs + ":" + currMins; //to get system formated time
            var currDate = curryyyy + "-" + currmm + "-" + currdd; //to get system formated date
            for (var i = 0; i < timeArr.length; i++) {
                if (timeArr[i] === currTime && currDate === Arrdate[i]) {                
                    timeArr.splice(i, 1);
                    Display(Arrtitle, Arrid, i);
                }
            }
        }, 6000);

    }
}
