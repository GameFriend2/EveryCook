$(document).ready(function(){
  setTimeout(slide, 300)

});
function slide() {
  $(".main_log").animate({
    right:'0px'
  },800, "swing")
}
