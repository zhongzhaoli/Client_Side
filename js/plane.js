var keyL = keyT = keyR = keyD = false;
function create_plane() {
    var a = $("<img src='images/plane.png' class='plane'>").appendTo($(".game_div"));
    //控制 左右 +-
    setInterval(function () {
        var now_top = $(a)[0].offsetTop;
        var now_left = $(a)[0].offsetLeft;
        if (keyL) {
            if (now_left == 0) {
                return;
            }
            $(a)[0].style.left = now_left - 5 + "px";
        }
        if (keyT) {
            if (now_top == 0) {
                return;
            }
            $(a)[0].style.top = now_top - 5 + "px";
        }
        if (keyR) {
            if (now_left == 920) {
                return;
            }
            $(a)[0].style.left = now_left + 5 + "px";
        }
        if (keyD) {
            if (now_top == 715) {
                return;
            }
            $(a)[0].style.top = now_top + 5 + "px";
        }
        //吃星星
        eat_shar();
        //吃燃料
        eat_liao();
        //吃鸟
        eat_bird();
    }, 10)
    //键盘实时控制
    $("body").on('keydown', function (event) {
        var e = event || window.event;
        switch (e.keyCode) {
            case 37:
                keyL = true;
                return;
            case 38:
                keyT = true;
                return;
            case 39:
                keyR = true;
                return;
            case 40:
                keyD = true;
                return;
        }
    })
    $("body").on('keyup', function (event) {
        var e = event || window.event;
        switch (e.keyCode) {
            case 37:
                keyL = false;
                return;
            case 38:
                keyT = false;
                return;
            case 39:
                keyR = false;
                return;
            case 40:
                keyD = false;
                return;
        }
    })
}