$(".menu-bar").click(function(e){
  $(".mobile-menu-tab-div").css({"left":"0"})
})
$(".arrow-right").click(function(e){
  $(".mobile-menu-tab-div").css({"left":"100%"})
  $(".menu_item ul").css({"height":"0"})
  x = [true,true,true,true]
})

var menu_item_ul_height = [$(".menu_item ul").eq(0).height(),$(".menu_item ul").eq(1).height(),$(".menu_item ul").eq(2).height(),$(".menu_item ul").eq(3).height()]
$(".menu_item ul").height(0)
var x = [true,true,true,true]
function a(num){
  $(".menu_item h3").eq(num).click(function(e){
    if(x[num]==true){
      $(".menu_item ul").css({"height":"0"})
      $(this).children("ul").css({"height":menu_item_ul_height[num]})
      x[num]=false
    }
    else {
      $(".menu_item ul").css({"height":"0"})
      x[num]=true
    }
  })
}
a(0), a(1), a(2), a(3)
