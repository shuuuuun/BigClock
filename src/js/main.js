(function(win, doc, ns){
  
  var $win = $(win);
  var util = new ns.Util();
  util.bindOnResize();
  
  $(function(){
    
    if (ns.ua.isSP) {
      // sp
      $(".onlypc").remove();
    }
    else {
      // pc
      $(".onlysp").remove();
    }
    
    var $clock = $(".clock");
    var $date = $(".date");
    
    setInterval(function(){
      var now = new Date();
      var hour = ("0" + now.getHours()).slice(-2);
      var min = ("0" + now.getMinutes()).slice(-2);
      var sec = ("0" + now.getSeconds()).slice(-2);
      $clock.text(hour+":"+min+":"+sec);
    }, 100);
    
    var dayChara = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var now = new Date();
    var year = now.getFullYear();
    var month = ("0" + (now.getMonth()+1)).slice(-2);
    var date = ("0" + now.getDate()).slice(-2);
    var day = now.getDay();
    $date.text(year+"."+month+"."+date+" "+dayChara[day]);
    
  });
  
  // for development
  win.dev = {
  };
  
})(this, document, App);
