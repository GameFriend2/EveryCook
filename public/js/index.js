$(function(){
  const $mainLog = $(".main_log");
  const $login = $(".login_form");
  const $regist = $(".regist_form");
  const $btn1 = $("#login_btn");
  const $btn2 = $("#regist_btn");
  const $cancle_btn = $(".login_cancle");
  const $cancle = $("#cancle");
  const $add_button = $(".item_add");
  const $subItemPot = $(".sub_item_pot");
  const $subItemDel = $(".sub_del");
  let index = 4;
  $add_button.click(function(){
    var tag = "<div class='item_list'><input class='sub_item item"+index + "' type='text' name='' value='' placeholder='요리에 필요한 부재료를 적어주세요'></input><button type='button' name='button'>&times;</button></div>"
    console.log(tag);
    $subItemPot.append(tag);
    index++;
  });

  $subItemDel.click(function(){
    $subItemDel.parent.remove();
    // $subItemDel.remove();
  })

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
