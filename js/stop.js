function stop_game() {
    if (is_end) {
        return;
    }
    var mb = $("<div class='mb'></div>").appendTo($(".game_div"));
    var mb_for_rea = $("<div class='mb_for_rea'></div>").appendTo($(".game_div"));
    var star = $("<img src='images/go.png' width='50px' style='cursor:pointer'>").appendTo(mb_for_rea);
    $(star).on('click', function () {
        go_game();
    })

    $(".stop").hide();

    is_stop = true;

    $(".diao_xing").stop(true);
    $(".yun").stop(true);
    $(".diao_liao").stop(true);
    $(".bird").stop(true);

}
function go_game() {
    if (is_end) {
        return;
    }
    is_stop = false;
    $(".mb").remove();
    $(".mb_for_rea").remove();
    $(".stop").show();
    [].forEach.call($(".yun"), function (x) {
        var yun_time = parseInt(($(x)[0].offsetLeft + 300) / 0.512);
        donghua($(x), yun_time);
    })
    if ($(".diao_xing").length) {
        var xing_time = parseInt(((750 - $(".diao_xing")[0].offsetTop) + 40) / 0.1097);
        star_donghua($(".diao_xing"), xing_time);
    }
    if ($(".bird").length) {
        var bird_time = parseInt(($(".bird")[0].offsetLeft + 300) / 0.512);
        bird_donghua($(".bird"), bird_time);
    }
    if ($(".diao_liao").length) {
        var liao_time = parseInt(((750 - $(".diao_liao")[0].offsetTop) + 40) / 0.1536);
        ran_donghua($(".diao_liao"), liao_time)
    }
}