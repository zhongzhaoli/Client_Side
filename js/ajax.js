
function ajax_for_end(name, time, stars) {
    $.ajax({
        url: "php/register.php",
        type: "post",
        data: { "name": name, "time": time, "stars": stars },
        success: function (e) {
            $(".input_text").remove();
            $(".button_for_input").remove();
            $("<div class='user_list'></div>").appendTo($(".cen_div"));
            var b = JSON.parse(e);
            for (var r in b) {
                b[r].time = parseInt(b[r].time);
                b[r].stars = parseInt(b[r].stars);
            }
            b.sort(function (x, y) {
                if (x.time > y.time) {
                    return -1;
                }
                else if (x.time === y.time) {
                    if (x.stars > y.stars) {
                        return -1;
                    }
                    else if (x.stars === y.stars) {
                        console.log("有相同");
                        return -1;
                    }
                    else {
                        return 1;
                    }
                }
                else {
                    return 1;
                }
            })
            for (var q in b) {
                var num = q + 1;
                var class_name = "nonee";
                if (q != 0) {
                    var Previous_obj = b[q - 1];
                    if (Previous_obj.time == b[q].time && Previous_obj.stars == b[q].stars) {
                        var num = parseInt($(".user_list").children().last().find("span").first()[0].innerHTML[0]);
                    }
                    else {
                        var num = parseInt($(".user_list").children().last().find("span").first()[0].innerHTML[0]) + 1;
                    }
                }
                if (name === b[q].name && parseInt(time) === b[q].time && parseInt(stars) === b[q].stars) {
                    class_name = "myself";
                }
                $("<li class=" + class_name + "><span>" + parseInt(num) + ".&nbsp;" + b[q].name + "</span><span>" + b[q].time + "秒</span><span>" + b[q].stars + "星</span></li>").appendTo($(".user_list"));
            }
            var button = $("<input type='button'class='agent_btn' value='重新开始'>").appendTo($(".cen_div"));
            $(button).on('click',function(){
                window.location.reload();
            })
        }
    })
}