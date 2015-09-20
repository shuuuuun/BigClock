(function(win, doc, ns){
  
  var $clock, $date;
  var dayChara = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  window.onload = function(){
    $clock = document.querySelector(".clock");
    $date = document.querySelector(".date");
    
    setInterval(function(){
      printTime();
    }, 100);
    
    printTime();
    printDate();
    
  };
  
  function printTime(){
    var now = new Date();
    var hour = ("0" + now.getHours()).slice(-2);
    var min = ("0" + now.getMinutes()).slice(-2);
    var sec = ("0" + now.getSeconds()).slice(-2);
    $clock.text(hour+":"+min+":"+sec);
    
    if (hour === "00") printDate();
  }
  
  function printDate(){
    var now = new Date();
    var year = now.getFullYear();
    var month = ("0" + (now.getMonth()+1)).slice(-2);
    var date = ("0" + now.getDate()).slice(-2);
    var day = now.getDay();
    $date.text(year+"."+month+"."+date+" "+dayChara[day]);
  }
  
})(this, document, App);
