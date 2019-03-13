$(function () {

    //主图-轮播的参数配置
    $("#bigFocus").slidebox({
        boxh: 420,//盒子的高度
        w: 1000,//图片的宽度
        h: 380,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });
    // 电子书轮播图js
    $("#book .bigFocus").slidebox({
        boxh: 215,//盒子的高度
        w: 328,//图片的宽度
        h: 215,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 15,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 2//控制按钮圆角度数
    });
    //电子书选项卡
    $("#book .leftBook .bookTab li").click(function () {
            //添加当前激活样式移除之前激活的样式
            $(this).addClass("bookActive").siblings().removeClass("bookActive");
            //显示当前对应的内容
            let index = $(this).index();
            $("#book .leftBook .newProduct > ul").removeClass("bookAct").eq(index).addClass("bookAct");
        }
    );
    //电子书手风琴
    $("#book .rightBook ul li").mouseover(function () {
        //让所有的div h4隐藏
        $("#book .rightBook ul li div").hide();
        $("#book .rightBook ul li h4").show();
        //显示当前的div h4
        $("div", this).show();
        $("h4", this).hide();

    });
    //服装轮播图js
    $("#cloth .colthFocus").slidebox({
        boxh: 342,//盒子的高度
        w: 427,//图片的宽度
        h: 338,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 15,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 2//控制按钮圆角度数
    });
    //服装选项卡
    $("#cloth .Tab li").click(function () {
            //添加当前激活样式移除之前激活的样式
            $(this).addClass("Active").siblings().removeClass("Active");
            let index = $(this).index();
            //显示当前对应的内容
            $("#cloth .ggbottom .rightPor").removeClass("activ").eq(index).addClass("activ");
        }
    );
    //户外轮播图js
    $("#sport .colthFocus").slidebox({
        boxh: 342,//盒子的高度
        w: 427,//图片的宽度
        h: 338,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 15,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 2//控制按钮圆角度数
    });
    //户外选项卡
    $("#sport .Tab li").click(function () {
            //添加当前激活样式移除之前激活的样式
            $(this).addClass("Active").siblings().removeClass("Active");
            let index = $(this).index();
            //显示当前对应的内容
            $("#sport .ggbottom .rightPor").removeClass("activ").eq(index).addClass("activ");
        }
    );
    //童装轮播图js
    $("#child .colthFocus").slidebox({
        boxh: 342,//盒子的高度
        w: 427,//图片的宽度
        h: 338,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 15,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 2//控制按钮圆角度数
    });
    //童装选项卡
    $("#child .Tab li").click(function () {
            //添加当前激活样式移除之前激活的样式
            $(this).addClass("Active").siblings().removeClass("Active");
            let index = $(this).index();
            //显示当前对应的内容
            $("#child .ggbottom .rightPor").removeClass("activ").eq(index).addClass("activ");
        }
    );
    //推广商品选项卡
    $("#promot .promotTab li").click(function () {
            //添加当前激活样式移除之前激活的样式
            $(this).addClass("active").siblings().removeClass("active");
            let index = $(this).index();
            //点击淡出当前内容淡入对应索引的内容
             $("#promot .promotList").removeClass("cur").eq(index).addClass("cur")

        }
    );

    $("#floor ul li").hover(function () {

        //定义数组保存背景色
        let bgColor = ["#93d46f", "#f65727", "#bb9dee", "#ff7394", "#c2ec51"];
        //获取当前索引
        let index = $(this).index();
        //移入显示背景色 改变宽度40为80；显示文本
        $(this).css({"width": "80px", "background-position-x": "-40px", "background-color": bgColor[index]});
    }, function () {
        //移除变为原来背景 宽度变为40
        $(this).css({"width": "40px", "background-position-x": "0px", "background-color": "#f2f2f2"});
    });

    $("#floor ul li").click(function () {
        //点击图片页面运动到对应的位置

        //获取当前对的索引值
        let index = $(this).index();
        //获取对应楼层距离浏览器窗口顶部的距离
        let sTop = $(".floorBox").eq(index).offset().top;

        $("html,body").animate({"scrollTop": sTop}, 500)

    });

    $(window).scroll(function () {
        let sTop = $("html,body").scrollTop();//获取当前滚动条的高度
        console.log(sTop);
        //判断
        if (sTop > 500) {
            $("#bgsch").slideDown();
            //追加收索框到bgsch
            $(".myF").appendTo("#bgsch");
        } else {
            //追加收索框到schCar
            $("#bgsch").slideUp();
            $(".myF").appendTo(".schCar");
        }
        if(sTop>=3900){//隐藏楼层
            $("#floor").hide();
        }else {
            $("#floor").show();
        }
    });

    //回到顶部按钮
    $("footer .pic").click(function () {
        let sTop = $("html,body").scrollTop();//获取当前滚动条的高度


        $("html,body").animate({"scrollTop": 0}, 1000)//回到顶部

    });

    $("#rollCen ul li:nth-child(2)").hover(function () {

        $(this).find(".pictwo").stop(true,false).fadeIn(500).css({"borderRadius":"50px"});
    }, function () {
        $(this).find(".pictwo").stop(true,false).delay(1500).fadeOut(500);
    })
});


