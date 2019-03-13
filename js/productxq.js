
//放大镜

$(function() {

    var _magnifier = magnifier({
        magnifier : "#magnifier1",//最外层的大容器
        width : 340,//承载容器宽
        height : 360,//承载容器高
        moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
        zoom : 5//缩放比例
    });

});




$(function () {

//3.需求： 数量增加： 点击addNum，让Num值增加1

    $(".addNum").click(function () {
        //找到数量的值
        let num = $(this).closest(".chagBox").find(".Num").val();
        num++;//点击一次加1
        $(this).closest(".chagBox").find(".Num").val(num);


    });
    //数量减少： 点击jianNum，让Num值减1
    $(".jianNum").click(function () {
        //找到数量的值
        let num = $(this).closest(".chagBox").find(".Num").val();
        //判断
        if (num == 1) { //num=1时
            return;//终止
        }

        num--;//点击一次减1
        $(this).closest(".chagBox").find(".Num").val(num);

  });



  //种类切换
    $(".blr3 p").click(function () {
        let a= $(this).prop("class");
          if(a!="active"){
              $(this).addClass("active");
          }else{
              $(this).removeClass("active");
          }

        $(this).siblings("p").removeClass("active")
    });


//商品介绍评价切换
    $(".appRight .shopjp li").click(function () {
        $(this).siblings().removeClass("Active");
        $(this).addClass("Active");

        let index=$(this).index();
        $(".appRight .shopjs").removeClass("Act").eq(index).addClass("Act");
    })



});
