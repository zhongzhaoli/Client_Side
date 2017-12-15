function ajax_for_end(name, time, stars) {
    $.ajax({
        url: "php/register.php",
        type: "post",
        data: { "name": name, "time": time, "stars": stars },
        success: function (e) {
            console.log(JSON.parse(e));
        }
    })
}