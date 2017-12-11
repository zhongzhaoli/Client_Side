function star_start() {
    $(".star_div").show();

    //星星掉落
    create_xing();
    xing_inter = setInterval(function () {
        create_xing();
    }, 8000)
}
//星星动画
function star_donghua(xing) {
    $(xing).animate({ top: "110%" }, 8000, "linear", function () {
        $(xing).remove();
    })
}
//创建星星
function create_xing() {
    var height_ = parseInt(Math.random() * 100);
    var xing = $("<img src='images/star-icon.png' class='diao_xing'>").appendTo($(".xing_div"));
    xing[0].style.left = height_ + "%";
    star_donghua(xing);
}
//吃星星 碰撞事件
function eat_shar() {
    var plane = $(".plane")[0];
    if ($(".diao_xing")[0]) {
        var star = $(".diao_xing")[0];

        var star_t = star.offsetTop;
        var star_l = star.offsetLeft;
        var star_r = star.offsetLeft + star.offsetWidth;
        var star_d = star.offsetTop + star.offsetHeight;

        var plane_t = plane.offsetTop;
        var plane_l = plane.offsetLeft;
        var plane_r = plane.offsetLeft + plane.offsetWidth;
        var plane_d = plane.offsetTop + plane.offsetHeight;


        if (plane_d < star_t || plane_l > star_r || plane_t > star_d || plane_r < star_l) {// 表示没碰上  

        } else {
            $(".diao_xing").remove();
            $(".text_start")[0].innerHTML = parseInt($(".text_start")[0].innerHTML) + 1;
        }
    }
    else {
        return;
    }
}