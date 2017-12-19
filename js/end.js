function for_end() {
    //动画停止
    is_end = true;
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
    var input = $("<input type='text' class='input_text' placeholder='输入用户名'><br>").appendTo(aa);
    var button = $("<input type='button' class='button_for_input' disabled value='Continue'>").appendTo(aa);
    var time;
    $(".button_for_input").on("click", function () {
        if (min != 0) {
            time = min * 60 + secound;
        }
        else {
            time = secound;
        }
        ajax_for_end($(".input_text")[0].value, time, $(".text_start")[0].innerHTML);
    })

    $(input).on("input", function () {
        if ($(input)[0].value != "") {
            $(button).removeAttr("disabled");
        }
        else {
            $(button).attr("disabled", "disabled");
        }
    })
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