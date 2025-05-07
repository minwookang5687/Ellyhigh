

$(function() {
    // 현재 시각
    var today = new Date();
    var year  = today.getFullYear();
    var month = today.getMonth() + 1;
    var day   = today.getDate();
  
    // 1시간 뒤의 정각(시만 +1)
    var targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 1);
    targetDate.setMinutes(0);
    targetDate.setSeconds(0);
    targetDate.setMilliseconds(0);
  
    // 카운트다운 종료 시점
    var countDownDate = targetDate.getTime();
  
    // 1초마다 업데이트
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
  
      // ① 시간이 이미 지났거나 0초가 된 경우 → 마감 처리
      if (distance <= 0) {
        clearInterval(x);
        document.getElementById("day").innerHTML       = "";
        document.getElementById("day1").innerHTML       = "";
        document.getElementById("day2").innerHTML       = "";
        document.getElementById("day3").innerHTML       = "";
        document.getElementById("countdown").innerHTML  = "혜택 마감 됩니다. 빠르게 신청해주세요.";
        document.getElementById("countdown1").innerHTML = "혜택 마감 됩니다. 빠르게 신청해주세요.";
        document.getElementById("countdown2").innerHTML = "혜택 마감 됩니다. 빠르게 신청해주세요.";
        document.getElementById("countdown3").innerHTML = "혜택 마감 됩니다. 빠르게 신청해주세요.";
        return; 
      }
  
      // ② 아직 시간이 남았다면 시/분/초 계산
      var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                      .toString().padStart(2, "0");
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                      .toString().padStart(2, "0");
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)
                      .toString().padStart(2, "0");
  
      // 화면에 표시
      document.getElementById("day").innerHTML       = year + ". " + month + ". " + day;
      document.getElementById("countdown").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
      document.getElementById("day1").innerHTML       = year + ". " + month + ". " + day;
      document.getElementById("countdown1").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
      document.getElementById("day2").innerHTML       = year + ". " + month + ". " + day;
      document.getElementById("countdown2").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
      document.getElementById("day3").innerHTML       = year + ". " + month + ". " + day;
      document.getElementById("countdown3").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
    }, 1000);
  
    // ticker 예시
    function upslide() {
      var h = $('#ticker').find('tbody > tr').outerHeight();
      var item = $('#ticker').find('tbody > tr:first-child');
      var itemClone = item.clone();
      $('#ticker > tbody').append(itemClone);
  
      $('#ticker_wrap').css({ 'top': 0 }).animate({ 'top': '-' + h + 'px' }, function() {
        $('#ticker_wrap').css({ 'top': 0 });
        item.remove();
      });
    }
    setInterval(function() { upslide() }, 1700);
  });