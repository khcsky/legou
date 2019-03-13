

$(function () {

    //初始化插件
    $("#myform").validate({
        //定义的验证规则
        rules: {
            user :{
                required :　true,
                isUser : true
            },
            pwd : {
                required :　true,
                ispwd:true
            },
            checkPwd : {
                equalTo:"#pwd"
            },
            phone:{
                required :　true,
                isphone:true,

            },
            phyzm:{
                required :　true,
            },
            yzm:{
                required :　true,
            }

        },
        //每个规则提示信息
        messages: {
            user :{
                required :　"请输入用户名",
                isUser : "输入4-16位的用户名"
            },
            pwd : {
                required :　"请输入密码",
                ispwd:"请输入6-12位的密码"
            },
            checkPwd : {
                equalTo: "两次密码不一致"

            },
            phone:{
                required :"请输入您的手机号",
                isphone:"请输入正确的手机号"
            },
            phyzm:{
                required :"请输入你的手机验证码"
            },
            yzm:{
                required :"请输入验证码"
            }
        }
    });


// 用户名验证    
    jQuery.validator.addMethod("isUser", function(value, element) {
        var postcode= /^[a-zA-Z0-9_-]{4,16}$/;//4到16位（字母，数字，下划线，减号）
        return this.optional(element) || (postcode.test(value));
    }, "请输入正确格式的用户名");

    jQuery.validator.addMethod("ispwd", function(value, element) {
        var postcode= /^[a-zA-Z0-9_-]{6,12}$/;//4到16位（字母，数字，下划线，减号）
        return this.optional(element) || (postcode.test(value));
    }, "请输入6-12位的密码");
    jQuery.validator.addMethod("isphone", function(value, element) {
        var postcode= /^[1][3,4,5,7,8][0-9]{9}$/;
        return this.optional(element) || (postcode.test(value));
    }, "请输入正确手机号");


     $("#male").click(function () {

         let check=  $(this).prop("checked");

        if(check==true){
            $("button").prop("disabled","")
        }else {
            $("button").prop("disabled","disabled")
        }

     })










});