var reminderList = [];

var RemOperation = function () {
    this.add = function (obj) {
        reminderList.push(obj);
        Render(reminderList);
        var localStroageEntry = new DatabaseManager();
        localStroageEntry.manipulateDataFromLocalStoarge(reminderList);
        var rem = [];
       var remTime = [];
       var arrtitle = [];
       var arrid = [];
       var arrdate = [];
       rem =JSON.parse(localStorage.getItem('reminder_List'));
       for(var j=0;j<rem.length;j++){
           remTime.push(rem[j].time);
           arrtitle.push(rem[j].title);
           arrid.push(rem[j].id);
           arrdate.push(rem[j].date);
       }
       var watching = new watch();
     watching.watcher(remTime.sort(),arrtitle,arrid,arrdate);
    };
    reminderList=[];
    
};


var DeleteReminder = function(id){ //this function deletes the object from local storage
    this.deleteDataFromLocalStoarge = function () {
        var arr=[];
        var flag;
        arr=JSON.parse(localStorage.getItem('reminder_List'));
        for(var i = 0 ; i < arr.length ; i++){
            if(arr[i].id == id){
              flag = i;
            }
        }
        
        arr.splice(flag, 1);       
         localStorage.setItem('reminder_List',JSON.stringify(arr));
    };
};


