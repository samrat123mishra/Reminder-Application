function BindEvents() { //responsible for all bind events....
  $('.glyphicon-plus').on('click', function () {
    var parseInput2 = new ParseInput($, 'reminderText', 'date', 'time');
    if (parseInput2.text !== "" && parseInput2.time !== "" && parseInput2.date !== "") {
      var reminder1 = new Reminder(parseInput2.text, parseInput2.time, parseInput2.date);
      if (reminder1.timeDiff < 0) {
        alert("Backdated alarm");
      } else {
        var remopt1 = new RemOperation();
        remopt1.add(reminder1);
      }
    } else {
      alert('invalid input');
    }
  });


  $('ul').on('click', 'li .close', function (event) {
    $(event.target.parentElement).remove();
    var deleteReminder1 = new DeleteReminder(event.target.parentElement.id);
    deleteReminder1.deleteDataFromLocalStoarge();
  });

  $(document).on('click', '.close', function () {
    document.getElementById('xyz').pause();
    document.getElementById('xyz').currentTime = 0;
  });

};
function Render(arr) { //rendering the objects in view...
  var arrToBeSorted = [];
  var sortedArr = [];
  var arrtitle = [];
  var arrid = [];
  var arrdate = [];
  for (var i = 0; i < arr.length; i++) {
    var note = arr[i].title;
    var date = arr[i].date;
    var time = arr[i].time;
    var id = arr[i].id;
    arrToBeSorted.push(time);
    arrtitle.push(note);
    arrid.push(id);
    arrdate.push(date);
    var rHr = parseInt(time.substring(0, 2));
    var rMin = parseInt(time.substring(3, 7));
    var timeCal = new TimeCalculation(date, rHr, rMin);
    var currTimeDiff = timeCal.totalTimeDiff;
    if (currTimeDiff > 0) {
      $('#myUL').append('<li id=' + id + '>' + note + '&nbsp&nbsp' + date + '&nbsp&nbsp' + time +
        '<span class="close glyphicon glyphicon-remove-sign"></span></li>');
    } else {
      $('#myUL').append('<li id=' + id + '>' + note + '&nbsp&nbsp' + date + '&nbsp&nbsp' + time +
        '<span class="close glyphicon glyphicon-remove-sign"></span></li>');
      $('#' + id).css('text-decoration', 'line-through');
    }
  }
  sortedArr = arrToBeSorted.sort();
  var watching = new watch();
  watching.watcher(sortedArr, arrtitle, arrid, arrdate);
}
var Display = function (Arrtitle, Arrid, i) { //this function is responsible for displaying the alarm modal
  $('.text p').text(Arrtitle[i]);
  document.getElementById('xyz').play();
  $('#id01').show();
  $('#' + Arrid[i]).css('text-decoration', 'line-through');
  Arrtitle.splice(i, 1);
  Arrid.splice(i, 1);
}
var Fetch = function () { //it fetches the object from the local storage...
  var storedNames = JSON.parse(localStorage.getItem("reminder_List"));
  if (storedNames !== null) {
    Render(storedNames);
  } 
}
$(document).ready(function () {
  BindEvents();
  Fetch();
});
