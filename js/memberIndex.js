$(function () {

    $("#memberBanner .pptbox").slidebox({
        boxh:500,//盒子的高度
        w: 728,//图片的宽度
        h: 500,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 15,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 2//控制按钮圆角度数
    });

});