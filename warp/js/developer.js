/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */ ! function(t) {
    var e;
    t.each(files, function(i, n) {
        if (!e) {
            var r = t("head [data-file='" + n.target + "']");
            r.length && t.less.getCSS(n.source, {
                compress: !0
            }).done(function(e) {
                "rtl" == t("html").attr("dir") && (e = t.rtl.convert2RTL(e)), r.html(e), t("body").width(), setTimeout(function() {
                    t(window).trigger("resize")
                }, 700)
            }).fail(function(t) {
                e = !0
            })
        }
    })
}(jQuery);