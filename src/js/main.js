(function(win, doc, ns){
  
  var INTERVAL = 500;
  var $clock, $analog, $date;
  var $handHour, $handMin, $handSec;
  var dayChara = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  window.onload = function(){
    $clock = document.querySelector(".clock");
    $analog = document.querySelector(".analog");
    $date = document.querySelector(".date");
    
    setInterval(function(){
      printTime();
      printAnalog();
    }, INTERVAL);
    
    setupAnalog();
    
    printTime();
    printDate();
    
  };
  
  function printTime(){
    var now = new Date();
    var hour = ("0" + now.getHours()).slice(-2);
    var min = ("0" + now.getMinutes()).slice(-2);
    var sec = ("0" + now.getSeconds()).slice(-2);
    $clock.innerText = hour+":"+min+":"+sec;
    
    if (hour === "00") printDate();
  }
  
  function printDate(){
    var now = new Date();
    var year = now.getFullYear();
    var month = ("0" + (now.getMonth()+1)).slice(-2);
    var date = ("0" + now.getDate()).slice(-2);
    var day = now.getDay();
    $date.innerText = year+"."+month+"."+date+" "+dayChara[day];
  }
  
  function setupAnalog(){
    $handHour = document.createElement('span');
    $handMin = document.createElement('span');
    $handSec = document.createElement('span');
    $handHour.classList.add('hand-hour');
    $handMin.classList.add('hand-min');
    $handSec.classList.add('hand-sec');
    for (var i = 0; i < 12; i++) {
      var $num = document.createElement('span');
      $num.classList.add('num');
      $num.innerText = i + 1;
      $analog.appendChild($num);
    }
    $analog.appendChild($handHour);
    $analog.appendChild($handMin);
    $analog.appendChild($handSec);
  }
  
  function printAnalog(){
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    $handHour.style.transform = 'rotate(' + (hour / 12 * 360) + 'deg)';
    $handMin.style.transform = 'rotate(' + (min / 60 * 360) + 'deg)';
    $handSec.style.transform = 'rotate(' + (sec / 60 * 360) + 'deg)';
  }
  
})(this, document, App);
