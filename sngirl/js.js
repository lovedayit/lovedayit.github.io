$(document).ready(function() {
    var t = [{
        name: "Sinh Nhật Tuổi 19",
        m1: Date.parse("Jan 19 2021 00:00:00")
    }, {
        name: "Sinh Nhật Tuổi 20",
        m1: Date.parse("Jan 19 2022 00:00:00")
    }, {
        name: "Sinh Nhật Tuổi 21",
        m1: Date.parse("Jan 19 2023 00:00:00")
    }, {
        name: "Sinh Nhật Tuổi 22",
        m1: Date.parse("Jan 19 2024 00:00:00")
    }, {
        name: "Sinh Nhật Tuổi 23",
        m1: Date.parse("Jan 19 2025 00:00:00")
    }, {
        name: "Sinh Nhật Tuổi 24",
        m1: Date.parse("Jan 19 2026 00:00:00")
    }, {
        name: "Sinh Nhật Tuổi 25",
        m1: Date.parse("Jan 19 2027 00:00:00")
    }]
      , e = t.length;
    setInterval(function() {
        for (var n = (new Date).getTime(), a = 0; a < e; a++) {
            var o = t[a].m1 - 864e5
              , r = t[a].m1 + 864e5
              , m = t[a].m1 + 2592e5;
            if (n <= m) {
                var i = t[a].m1
                  , s = !1
                  , c = a + 2018
                  , g = t[a].name + " "
                  , p = "Đếm ngược đến " + g 
                  , l = "Còn lại...!"
                  , h = "Chúc"
                  , u = "Mừng"
                  , x = "Sinh"
                  , T = "Nhật"
                  , f = "Ngày"
                  , y = "Giờ"
                  , d = "Phút"
                  , C = "Giây";
                if (n >= t[a].m1 && (i = m,
                n >= r ? l = "" : (s = !0,
                l = "Sắp rồi!!!Sắp rồi!!!",
                f = "Chúc",
                y = "Mừng",
                d = "Sinh",
                C = "Nhật")),
                !s) {
                    var b = i - n;
                    T = Math.floor(b / 1e3 % 60),
                    x = Math.floor(b / 1e3 / 60 % 60),
                    u = Math.floor(b / 36e5 % 24),
                    h = Math.floor(b / 864e5)
                }
                $("#tetornot").text(l),
                $("#days").text(h),
                $("#hours").text(u),
                $("#mins").text(x),
                $("#secs").text(T),
                $("#days-text").text(f),
                $("#hours-text").text(y),
                $("#mins-text").text(d),
                $("#secs-text").text(C),
                $("#tentet").text(g),
                $("#tet").text(g),
                n >= o && ($("html").css({
                    background: "radial-gradient(ellipse at bottom, #efe81d 0%, #f80f1f 100%)"
                }),
                $(".clock").toggleClass("tet"),
                $(".clock .text").toggleClass("tet")),
                document.title = p,
                $('meta[name="description"]').attr("content", "Còn bao nhiêu ngày nữa đến sinh nhật " + g + "?"),
                $('meta[property="og\\:title"]').attr("content", p),
                $('meta[property="og\\:description"]').attr("content", "Còn bao nhiêu ngày nữa đến sinh nhật " + g + "?"),
                $('meta[property="og\\:image"]').attr("content", "/icon.png");
                break
            }
        }
    }, 1e3)
});
