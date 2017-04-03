var DatabaseManager = function () {
    this.manipulateDataFromLocalStoarge = function (arr) {
      var arr1=[];
         arr1=JSON.parse(localStorage.getItem('reminder_List'));
        if(arr1 !== null){
          arr1 = arr1.concat(arr);
          // render(arr1);
          localStorage.setItem('reminder_List', JSON.stringify(arr1));
      }else {
        // render(arr);
        localStorage.setItem('reminder_List', JSON.stringify(arr));
      }

    }
};