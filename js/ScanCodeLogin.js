$(function () {



    $("#Login .loginBox h1").click(function () {
       //登录激活样式
        $(this).addClass("active").siblings().removeClass("active");

        let index = $(this).index();
        //显示当前对应的内容
        $("#Login .loginBox .chag").removeClass("loact").eq(index).addClass("loact");

    });
    //二维码
     $("#Login .loginBox .scan").hover(function () {
         $(this).find("p:last-of-type").stop(true,false).slideUp();
         $(this).find("p:first-of-type").stop(true,false).animate({"left":"100px"});
     },function () {
         $(this).find("p:last-of-type").stop(true,false).slideDown();
         $(this).find("p:first-of-type").stop(true,false).animate({"left":"28px"});
         }
     )




});