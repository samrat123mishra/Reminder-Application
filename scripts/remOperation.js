var reminderList = [];

var RemOperation = function () {
    this.add = function (obj) {

        reminderList.push(obj);
        render(reminderList);
        var localStroageEntry = new DatabaseManager();
        localStroageEntry.manipulateDataFromLocalStoarge(reminderList);
        var alarmOperation = new AlarmOpt(obj);
        alarmOperation.set();
    };
    reminderList=[];
    //del(obj);
};


var DeleteReminder = function(id){
    this.deleteDataFromLocalStoarge = function () {
        var arr=[];
        var flag;
        arr=JSON.parse(localStorage.getItem('reminder_List'));
        for(var i = 0 ; i < arr.length ; i++){
            if(arr[i].id == id){
              flag = i;
            }
        }
        
        console.log(arr.splice(flag, 1));
        console.log(arr);      
         localStorage.setItem('reminder_List',JSON.stringify(arr));
    };
};


