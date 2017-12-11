function for_end() {
    //动画停止
    $(".bird").stop();
    $(".yun").stop();
    $(".diao_liao").stop();
    $(".diao_xing").stop();
    //计时器停止
    is_has_and_clear();
    //创建结束页面
    var mb = $("<div class='mb'></div>").appendTo($(".game_div"));
    var mb_for_rea = $("<div class='mb_for_rea'></div>").appendTo($(".game_div"));
    var aa = $("<div class='cen_div'></div>").appendTo(mb_for_rea);
    $("<h1>游戏结束</h1>").appendTo(aa);
    $("<input type='text' class='input_text'><br>").appendTo(aa);
    $("<button>Continue</button>").appendTo(aa);
}
function is_has_and_clear() {
    if (typeof (bird_inter) != "undefined") {
        clearInterval(bird_inter);
    }
    if (typeof (xing_inter) != "undefined") {
        clearInterval(xing_inter);
    }
    if (typeof (liao_inter) != "undefined") {
        clearInterval(liao_inter);
    }
    if (typeof (ran_inter) != "undefined") {
        clearInterval(ran_inter);
    }
    if (typeof (yun_inter) != "undefined") {
        clearInterval(yun_inter);
    }
    if (typeof (plane_inter) != "undefined") {
        clearInterval(plane_inter);
    }
    if (typeof (jishi) != "undefined") {
        clearInterval(jishi);
    }
}