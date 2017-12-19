function yun_start() {
    createyun();
    yun_inter = setInterval(function () {
        if (!is_stop) {
            createyun();
        }
    }, 750);
}
//云的动画周期 
function donghua(yun, time) {
    $(yun).animate({ left: "-30%" }, time, "linear", function () {
        $(yun).remove();
    });
}
//创建云
function createyun() {
    var height_ = parseInt(Math.random() * 90);
    var yun = $('<img src="images/yun.png" class="yun">').appendTo($(".yun_div"));
    yun[0].style.top = height_ + "%";
    donghua(yun, 2000);
}