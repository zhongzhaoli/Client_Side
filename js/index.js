window.onload = function () {
    //计时器
    var bird_inter;
    var xing_inter;
    var liao_inter;
    var ran_inter;
    var yun_inter;
    var plane_inter;
    var jishi;
    $(".start_btn").on('click', function () {

        //删除开始游戏按钮
        $(this).remove();

        //创建飞机并控制
        create_plane();

        //云开始动
        yun_start();

        //燃油显示并计算
        ran_start();

        //星星计算
        star_start();

        //鸟
        bird_start();

        //计时飞行了多久
        $(".fly_time")[0].innerHTML = "0分0秒";

    });
}