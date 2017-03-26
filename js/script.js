$(document).ready(function() {

    $(window).scroll(function() {
        let distanceY = window.pageYOffset;
        let shrinkOn = 200;
        if (distanceY > shrinkOn) {
            $('.header').addClass("smaller");
        } else {
            if ($('.header').hasClass("smaller")) {
                $('.header').removeClass("smaller");
            }
        }
    });

    $(".trailer").click(function(e) {

        e.preventDefault();
        $.fancybox({
            'padding': 0,
            'width': '70%',
            'height': '70%',
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type': 'swf',
            'swf': {
                'allowfullscreen': 'true',
                'wmode': 'transparent'
            }
        });
        return false;
    });
});
