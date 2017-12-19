function bird_start() {

    bird_inter = setInterval(function () {
        if (!is_stop) {
            bird_create();
        }
    }, 5000)
}
function bird_create() {
    var witch_bird = parseInt(Math.random() * 4);
    var height_ = parseInt(Math.random() * 90);
    var bird = $("<img src='images/bird/Bird-" + witch_bird + ".gif' class='bird'>").appendTo($(".bird_div"));
    bird[0].style.top = height_ + "%";
    bird_donghua(bird, 3000);
}
function bird_donghua(bird, time) {
    $(bird).animate({ left: '-10%' }, time, "linear", function () {
        $(bird).remove();
    })
}
function eat_bird() {
    var plane = $(".plane")[0];
    if ($(".bird")[0]) {
        var liao = $(".bird")[0];
        var liao_t = liao.offsetTop;
        var liao_l = liao.offsetLeft;
        var liao_r = liao.offsetLeft + liao.offsetWidth;
        var liao_d = liao.offsetTop + liao.offsetHeight;

        var plane_t = plane.offsetTop;
        var plane_l = plane.offsetLeft;
        var plane_r = plane.offsetLeft + plane.offsetWidth;
        var plane_d = plane.offsetTop + plane.offsetHeight;


        if (plane_d < liao_t || plane_l > liao_r || plane_t > liao_d || plane_r < liao_l) {// 表示没碰上  

        } else {
            if (sound_type) {
                document.getElementById("bg").pause();
                document.getElementById("bird_end").play();
            }
            for_end();
        }
    }
    else {
        return;
    }
}