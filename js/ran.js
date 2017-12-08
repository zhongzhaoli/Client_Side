function ran_start() {
    $(".ran_div").show();
    var a = $("<div class='liao_big_div'></div>").appendTo($(".ran_div"));
    //生成燃料
    for (var i = 1; i <= 10; i++) {
        $("<div class='ranliao'></div>").appendTo(a);
    }
    //燃料减少
    setInterval(function () {
        $(".liao_big_div div:last").remove();
    }, 1000)


    //燃料掉落
    create_liao();
    setInterval(function () {
        create_liao();
    }, 6000)
}
//燃料动画
function star_donghua(liao) {
    $(liao).animate({ top: "110%" }, 5000, "linear", function () {
        $(liao).remove();
    })
}
//创建燃料
function create_liao() {
    var height_ = parseInt(Math.random() * 100);
    var liao = $("<img src='images/liao.png' class='diao_liao'>").appendTo($(".liao_div"));
    liao[0].style.left = height_ + "%";
    star_donghua(liao);
}
//吃燃料
function eat_liao() {
    var plane = $(".plane")[0];
    if ($(".diao_liao")[0]) {
        var liao = $(".diao_liao")[0];
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
            $(".diao_liao").remove();
            $(".liao_big_div")[0].innerHTML = "";
            //生成燃料
            for (var i = 1; i <= 10; i++) {
                $("<div class='ranliao'></div>").appendTo($(".liao_big_div"));
            }
        }
    }
    else {
        return;
    }
}