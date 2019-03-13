$(function () {
    //1. 需求： 切换全选


    $(".allX").change(function () {

        //获取当前选中状态
        let bool = $(this).prop("checked");
        //把bool付给选中的商品状态
        $(".prox").prop("checked", bool);
        allPrice();
    });

    // 2. 需求：点击所有商品proX,切换全选


    $(".prox").change(function () {

        let fage = true;//定义标杆

        //遍历所有商品

        $(".prox").each(function (index, dome) {

            //获取当前选中状态
            let bool = $(this).prop("checked");
            //判断
            if (bool === false) {//如果选中状态为false
                fage = false;//标杆为false
                return;//终止判断
            }
        });
        //判断标杆值觉定是否选中
        if (fage) {
            $(".allX").prop("checked", true);
        } else {
            $(".allX").prop("checked", false);
        }
        allPrice();
    });
    //3.需求： 数量增加： 点击addNum，让Num值增加1

    $(".addNum").click(function () {
        //找到数量的值
        let num = $(this).closest("td").find(".Num").val();
        num++;//点击一次加1
        $(this).closest("td").find(".Num").val(num);


        xiaoji(this,num);
        allPrice();

    });
    //数量减少： 点击jianNum，让Num值减1
    $(".jianNum").click(function () {
        //找到数量的值
        let num = $(this).closest("td").find(".Num").val();
        //判断
        if (num == 1) { //num=1时
            return;//终止
        }

        num--;//点击一次减1
        $(this).closest("td").find(".Num").val(num);
        xiaoji(this,num);
        allPrice();
    });
  //定义小计函数

    function xiaoji(obj,n) {
         //获取单击对象的单价
        let sPrice= $(obj).closest("tr").find(".sPrice").text();
        let Xj=(n*sPrice).toFixed(2);//数量*单价
        $(obj).closest("tr").find(".Xj").text(Xj);//付给小计
    }

 //定义总价函数
    function allPrice() {
        let allP=0;//定义一个变量保存总价
        let allN=0;//定义一个变量保存总数

       $(".prox").each(function (index,dome) {
           //获取当前商品的选中状态值
           let bool = $(this).prop("checked");

           if(bool==true){
               //获取选中的小计
               let sPrice=parseFloat($(this).closest("tr").find(".Xj").text());

               allP += sPrice;//累计赋值给总价
               //获取选中的个数
               let Num= parseInt($(this).closest("tr").find(".Num").val());
               allN+=Num;//累计赋值给总价
           }
       });
        allP = allP.toFixed(2);//保留两位小数
     $(".allPrice").text(allP);//将值添加到总价中
     $(".number").text(allN);//将总个数添加到总个数中


    }






});