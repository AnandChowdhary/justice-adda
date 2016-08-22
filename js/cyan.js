/*$(window).on("resize", function() {
    if ($("body").width() <= 1200) {
        $(".navbar-primary .nav-links").css("width", $(".navbar-viewer").outerWidth() + "px");
        $(".navbar-primary .nav-links").css("left", $(".navbar-viewer").position().left + "px");
        $(".navbar-primary .nav-links").css("top", ($(".navbar-viewer").position().top + $(".navbar-viewer").outerHeight() + 20) + "px");
        $(".navbar-viewer").click(function() {
            $(".navbar-primary .nav-links").toggle();
        });
    } else {
        $(".navbar-primary .nav-links").css("width", "auto");
        $(".navbar-primary .nav-links").show();
    }
}).resize();*/

var mobileGenerated = 0;

$(".mobile-navbar-toggle").click(function() {
    $(".mobile-float-navbar").fadeToggle();
});
$(".search-toggle").click(function() {
    $(".search-form-header").fadeToggle();
    $(".search-field-header").focus();
});

$(window).on("resize", function() {
    if ($("body").width() <= 1200) {
        if (mobileGenerated == 0) {
            $(".navbar-convert > li").each(function() {
                $(".navbar-converted").append($(this));
                $(this).click(function() {
                    $(this).find(".megamenu-inside").slideToggle();
                });
            });
            mobileGenerated++;
        }
    }
    if ($("body").width() > 1200 && mobileGenerated > 0) {
        $(".navbar-converted > li").each(function() {
            $(".navbar-convert").append($(this));
        });
        mobileGenerated--;
    }
}).resize();
