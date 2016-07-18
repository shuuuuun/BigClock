(function(win, doc, ns){
  
  var INTERVAL = 500;
  var $clock, $analog, $date;
  var hands = [];
  var dayChara = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var handClassList = ["hand-hour", "hand-min", "hand-sec"];
  
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
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 12; i++) {
      var $num = document.createElement("span");
      $num.classList.add("num");
      $num.innerText = i + 1;
      fragment.appendChild($num);
    }
    for (var i = 0; i < 3; i++) {
      var $hand = document.createElement("span");
      $hand.classList.add(handClassList[i]);
      hands.push($hand);
      fragment.appendChild($hand);
    }
    $analog.appendChild(fragment);
  }
  
  function printAnalog(){
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    hands[0].style.transform = "rotate(" + (hour / 12 * 360) + "deg)";
    hands[1].style.transform = "rotate(" + (min / 60 * 360) + "deg)";
    hands[2].style.transform = "rotate(" + (sec / 60 * 360) + "deg)";
  }
  
})(this, document, App);
