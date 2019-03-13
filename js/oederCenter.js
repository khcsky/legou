$(function () {


    let flag = true;
    //种类切换
    $(".ad1").click(function () {

          if(flag){
              $(this).closest("form").find(".ad1").removeClass("active");
              $(this).removeClass("active");
              $(this).closest("form").find(".ad1>i").css("display","none");
              $(this).find("i").css("display","none")
          }else {

              $(this).addClass("active");
              $(this).find("i").css("display","block")
          }

        flag=!flag;



    });
    //支付选项卡
    $(".zfList li").click(function () {

            $(this).siblings("li").removeClass("active");
            $(this).addClass("active");
            $(this).closest(".zfList").find("i").css("display","none")
            $(this).find("i").css("display","block");



    });


});