$(function(){
  const $mainLog = $(".main_log");
  const $login = $(".login_form");
  const $regist = $(".regist_form");
  const $btn1 = $("#login_btn");
  const $btn2 = $("#regist_btn");
  const $cancle_btn = $(".login_cancle");
  const $cancle = $("#cancle");




  slide();

  LoginConsole($login, $btn1);
  LoginConsole($regist, $btn2);





  function LoginConsole(thing, btn) {
    btn.click(function() {
      thing.css("display", "block");
    });

    $cancle_btn.click(function(){
      thing.css("display", "none");
    });

    $(document).click(function(event){
      if(event.target == thing){
        thing.css("display", "none");
      }
    });

    $cancle.click(function() {
      $regist.css("display", "none");
    })
  }

  function slide() {
    $mainLog.animate({
      right:'0px'
    },800, "swing")
  }

});
