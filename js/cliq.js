$(document).ready(function(){
  //가끔씩 스크롤이 옆으로 넘어가는 경우 초기화
  $(window).on("resize",function(){
    $(window).scrollLeft(0)
    $(window).scrollTop(0)
  })
  $("img.cliq").css({"margin-top":"100px","opacity":0})
  $("img.cliq").animate({"margin-top":"0px","opacity":1},1500)
  var hide45 = $(".45hide").height()
  $(".45hide").css({"overflow":"hidden","height":"0px"})
  var count_45 = 0;
  $("#sec3 i").click(function(){
    count_45++;
    if(count_45%2==1){
      $(this).css({"transform":"translate(-50%,-38px) rotate(45deg)","background":"black","border":"none"})
      $(".45hide").css({"height":hide45});

      setTimeout(function(){
        $(".45hide").css({"transition":"all .3s ease"});
        $(".45hide").css({"margin-top":"-57px"});
      },300)

      setTimeout(function(){
        $("html, body").stop().animate({scrollTop:$("#sec4").offset().top-100},500)
      },400)

    }
    if(count_45%2==0){
      $(this).css({"transform":"translate(-50%,-100%) rotate(0deg)","background":"none","border":"1px solid white"})
      $(".45hide").css({"height":"0"});
      setTimeout(function(){
        $(".45hide").css({"margin-top":"0px"});
        $(".45hide").css({"transition":"all .5s ease"});
      },300)
      setTimeout(function(){
        $("html, body").stop().animate({scrollTop:$("#sec3").offset().top+300},500)
      },400)

    }
  })

  var hide78 = $(".78hide").height()
  $(".78hide").css({"overflow":"hidden","height":"0px"})
  var count_78 = 0;
  $("#sec6 i").click(function(){
    count_78++;
    if(count_78%2==1){
      $(this).css({"transform":"translate(-50%,-38px) rotate(45deg)","background":"black","border":"none"})
      $(".78hide").css({"height":hide78});

      setTimeout(function(){
        $(".78hide").css({"transition":"all .3s ease"});
        $(".78hide").css({"margin-top":"-57px"});
      },300)

      setTimeout(function(){
        $("html, body").stop().animate({scrollTop:$("#sec7").offset().top-100},500)
      },400)

    }
    if(count_78%2==0){
      $(this).css({"transform":"translate(-50%,-100%) rotate(0deg)","background":"none","border":"1px solid white"})
      $(".78hide").css({"height":"0"});
      setTimeout(function(){
        $(".78hide").css({"margin-top":"0px"});
        $(".78hide").css({"transition":"all .5s ease"});
      },300)
      setTimeout(function(){
        $("html, body").stop().animate({scrollTop:$("#sec6").offset().top+300},500)
      },400)

    }
  })

  var hide11 = $(".11hide").height()
  $(".11hide").css({"overflow":"hidden","height":"0px"})
  var count_11 = 0;
  $("#sec10 i").click(function(){
    count_11++;
    if(count_11%2==1){
      $(this).css({"transform":"translate(-50%,-38px) rotate(45deg)","background":"black","border":"none"})
      $(".11hide").css({"height":hide11});

      setTimeout(function(){
        $(".11hide").css({"transition":"all .3s ease"});
        $(".11hide").css({"margin-top":"-57px"});
      },300)

      setTimeout(function(){
        $("html, body").stop().animate({scrollTop:$("#sec11").offset().top-100},500)
      },400)

    }
    if(count_11%2==0){
      $(this).css({"transform":"translate(-50%,-100%) rotate(0deg)","background":"none","border":"1px solid white"})
      $(".11hide").css({"height":"0"});
      setTimeout(function(){
        $(".11hide").css({"margin-top":"0px"});
        $(".11hide").css({"transition":"all .5s ease"});
      },300)
      setTimeout(function(){
        $("html, body").stop().animate({scrollTop:$("#sec10").offset().top+300},500)
      },400)
    }
  })

  var hide1314 = $(".1314hide").height()
  $(".1314hide").css({"overflow":"hidden","height":"0px"})
  var count_1314 = 0;
  $("#sec12 i").click(function(){
    count_1314++;
    if(count_1314%2==1){
      $(this).css({"transform":"translate(-50%,-38px) rotate(45deg)","background":"black","border":"none"})
      $(".1314hide").css({"height":hide1314});

      setTimeout(function(){
        $(".1314hide").css({"transition":"all .3s ease"});
        $(".1314hide").css({"margin-top":"-57px"});
      },300)

      setTimeout(function(){
        $("html, body").stop().animate({scrollTop:$("#sec13").offset().top-100},500)
      },400)

    }
    if(count_1314%2==0){
      $(this).css({"transform":"translate(-50%,-100%) rotate(0deg)","background":"none","border":"1px solid white"})
      $(".1314hide").css({"height":"0"});
      setTimeout(function(){
        $(".1314hide").css({"margin-top":"0px"});
        $(".1314hide").css({"transition":"all .5s ease"});
      },300)
      setTimeout(function(){
        $("html, body").stop().animate({scrollTop:$("#sec12").offset().top+300},500)
      },400)
    }
  })

  $("#sec3 h2").css({"opacity":"0","transform":"translateY(50px)","transition":"all ease .5s"})
  $("#sec3 p, #sec3 h4").css({"opacity":"0","transition":"all ease .5s"})

  $("#sec6 h2").css({"opacity":"0","transform":"translateX(50px)","transition":"all ease .5s"})
  $("#sec6 p, #sec6 h4").css({"opacity":"0","transition":"all ease .5s"})

  $("#sec12 h2").css({"opacity":"0","transform":"translateX(50px)","transition":"all ease .5s"})
  $("#sec12 p, #sec12 h4").css({"opacity":"0","transition":"all ease .5s"})
  $(window).scroll(function(e){
    var winscrolltop = $(window).scrollTop()
    var sec3scrolltop = $("#sec3").offset().top
    var sec6scrolltop = $("#sec6").offset().top
    var sec12scrolltop = $("#sec12").offset().top

    if(winscrolltop+500 > sec3scrolltop){
      $("#sec3 h2").css({"opacity":1,"transform":"translateY(0px)"})
      setTimeout(function(){
        $("#sec3 p, #sec3 h4").css({"opacity":1})
      },300)
    }
    if(winscrolltop+500 > sec6scrolltop){
      $("#sec6 h2").css({"opacity":1,"transform":"translateY(0px)"})
      setTimeout(function(){
        $("#sec6 p, #sec6 h4").css({"opacity":1})
      },300)
    }

    if(winscrolltop+500 > sec12scrolltop){
      $("#sec12 h2").css({"opacity":1,"transform":"translateY(0px)"})
      setTimeout(function(){
        $("#sec12 p, #sec12 h4").css({"opacity":1})
      },300)
    }
  })


})
