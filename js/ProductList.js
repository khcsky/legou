$(function () {

    //主图-轮播的参数配置
    $("#productList #bigFocus").slidebox({
        boxh: 430,//盒子的高度
        w: 1000,//图片的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });


    $("#productList .porListr li").hover(function () {

        $(this).siblings().find(".non").show();
        $(this).siblings().find(".blok").hide();
        $(this).find(".non").hide();
        $(this).find(".blok").show();
    }, function () {
        // $(this).find(".non").show();
        // $(this).find(".blok").hide();
    });


    $("#newBook .rightBook ul li").mouseover(function () {
        //让所有的div h4隐藏
        $("#newBook .rightBook ul li div").hide();
        $("#newBook .rightBook ul li h4").show();
        //显示当前的div h4
        $("div", this).show();
        $("h4", this).hide();

    });

    //独家提供轮播的参数配置
    $("#provide .bigFocus").slidebox({
        boxh: 500,//盒子的高度
        w: 1200,//图片的宽度
        h: 500,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });

    // 猜你喜欢切换内容
    $("#youLike .change").click(function () {

        $(this).closest(".titletwo").siblings(".newbkleft").slideToggle();
    })

});