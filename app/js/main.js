(function ($) {
    "use strict";

    var weddingDate = new Date("2016-04-10 14:00:00 +800"),
        $days = $('.days'),
        $hours = $('.hours'),
        $minutes = $('.minutes'),
        $seconds = $('.seconds');

    var updateDate = function () {
        var now = new Date(),
            diff = Math.abs(weddingDate - now),
            totalSeconds = Math.floor(diff / 1000);
        
        var days = Math.floor(totalSeconds / 86400);
        totalSeconds -= days * 86400;

        var hours = Math.floor(totalSeconds / 3600) % 24;
        totalSeconds -= hours * 3600;

        var minutes = Math.floor(totalSeconds / 60) % 60;
        totalSeconds -= minutes * 60;

        var seconds = totalSeconds % 60;

        $days.text(days);
        $hours.text(hours);
        $minutes.text(minutes);
        $seconds.text(seconds);
    };

    updateDate();
    setInterval(updateDate, 1000);


})(jQuery);
