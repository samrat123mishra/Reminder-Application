var DatabaseManager = function () { //it is setting the object in local storage..
    this.manipulateDataFromLocalStoarge = function (arr) {
      var arr1=[];
         arr1=JSON.parse(localStorage.getItem('reminder_List'));
        if(arr1 !== null){
          arr1 = arr1.concat(arr);
          localStorage.setItem('reminder_List', JSON.stringify(arr1));
      }else {
        localStorage.setItem('reminder_List', JSON.stringify(arr));
      }

    }
};