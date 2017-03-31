var reminderList = [];

var remOperation = function () {
    this.add = function (obj) {

        reminderList.push(obj);
        render(reminderList);
        var localStroageEntry = new databaseManager();
        localStroageEntry.manipulateDataFromLocalStoarge(reminderList);
        var alarmOperation = new alarmOpt(obj);
        alarmOperation.set();
    };
    reminderList=[];
    //del(obj);
};

var databaseManager = function () {
    this.manipulateDataFromLocalStoarge = function (arr) {
      var arr1=[];
         arr1=JSON.parse(localStorage.getItem('reminder_List'));
        if(arr1 !== null){
          arr1 = arr1.concat(arr);
          // render(arr1);
          localStorage.setItem('reminder_List', JSON.stringify(arr1));
          console.log('peyechi');
      }else {
        console.log('localStorage khali');
        // render(arr);
        localStorage.setItem('reminder_List', JSON.stringify(arr));
      }

    }
};




var deleteReminder = function(id){
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

var fetch=function(){
        var storedNames = JSON.parse(localStorage.getItem("reminder_List"));
        if(storedNames !== null){
            render(storedNames);
        }else {
          console.log('kichu neu');
        }

    }
