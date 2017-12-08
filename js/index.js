window.onload = function () {
    var min = 0;//分
    var secound = 0;//秒
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

        //计时飞行了多久
        $(".fly_time")[0].innerHTML = "0分0秒";
        setInterval(function () {
            secound++;
            if (secound >= 60) {
                secound = 0;
                min++;
            }
            $(".fly_time")[0].innerHTML = min + "分" + secound + "秒";
        }, 1000)
    });
}