$(function(){
  const $mainLog = $(".main_log");
  const $modal = $(".login_form");
  const $btn = $("#login_btn");
  const $cancle_btn = $(".login_cancle");

  $btn.click(function() {
    $modal.css("display", "block");
  });

  $cancle_btn.click(function(){
    $modal.css("display", "none");
  });

  $(document).click(function(event){
    if(event.target == $modal){
      $modal.css("display", "none");
    }
  });
  slide();

  function slide() {
    $mainLog.animate({
      right:'0px'
    },800, "swing")
  }

});
