var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");


var clock=setInterval(

    function time(){

        var new_date= new Date();
        var hr=new_date.getHours();
        var min=new_date.getMinutes();
        var sc=new_date.getSeconds();

        if(hr<10){
            hr="0"+hr;
        }
        if(min<10){
            min="0"+min;
        }
        if(sc<10){
            sc="0"+sc;
        }

        hour.textContent=hr;
        minute.textContent=min;
        seconds.textContent=sc;



    },1000


);






















/* var clock = setInterval(
    function time(){
      var date_now = new Date();
      var hr = date_now.getHours();
      var min = date_now.getMinutes();
      var sec = date_now.getSeconds();
      
      if(hr < 10){
          hr = "0" + hr;
      } 
      if(min < 10){
          min = "0" + min;
      } 
      if(sec < 10){
          sec = "0" + sec;
      }

      hour.textContent = hr;
      minute.textContent = min;
      seconds.textContent = sec;



    },1000
); */