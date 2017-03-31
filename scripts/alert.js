var alarmOpt = function (obj) {
    var timeDiff = obj.timeDiff;
    var id = obj.id;
    var text = obj.title;
    var a;
    this.set = function () {
        setTimeout(function () {
            document.getElementById('xyz').play();
            $('#id01').show();
            $('#'+id).css('text-decoration','line-through');
        }, timeDiff);
    };
    
}