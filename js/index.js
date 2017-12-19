var sound_type = true;
var is_stop = false;
var is_end = false;
window.onload = function () {
    //计时器
    var bird_inter;
    var xing_inter;
    var liao_inter;
    var ran_inter;
    var yun_inter;
    var plane_inter;
    var jishi;


    $(".sound_on_off").on('click', function () {
        var a = $(".sound_on_off")[0];
        if (sound_type) {
            //关闭
            a.src = "images/sound_off.png";
            document.getElementById("bg").pause();
            sound_type = false;
        }
        else {
            //开启
            a.src = "images/sound_on.png";
            document.getElementById("bg").play();
            sound_type = true;
        }
    })

    $(".stop").on("click", function () {
        stop_game();
    })

    $(".start_btn").on('click', function () {

        //删除开始游戏按钮
        $(this).remove();
        $(".title").remove();

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

        $(".stop").show();
        
        $(".fly_time")[0].innerHTML = "0分0秒";

        $(".sound_on_off").show();
        document.getElementById("bg").play();

    });
}