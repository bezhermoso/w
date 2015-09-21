var isNarrow = function () {
    return $('#narrow-detector').is(':visible');
};
(function($){
    var wideController = new ScrollMagic.Controller();
    var narrowController = new ScrollMagic.Controller(narrowController);
    
    $(document).ready(function(){
        wideAnimations(wideController);
        narrowAnimations(narrowController);
    });

})(jQuery);

var wideAnimations = function (controller) {
    var trigger = '#top';
    var pin = '#top';

    var scene1 = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0,
        duration: 1000
    }).setPin(pin);
    //
    //
    var $envelope = $('#envelope');
    var $coralBox = $('.coral-box', $envelope);
    var venueSection = $('section#venue');
    var $mainNav = $('#main-nav');
    var tweens = [];

    var timeline = new TimelineMax();

    timeline.to($envelope, 1, { width: '100%'});
    timeline.to($coralBox, 1, { padding: 0, margin: 0});
    timeline.to($coralBox, 5, { height: '100vh'}, 3);
    timeline.to($coralBox, 5, { position: 'absolute', right: 0, left: 0}, 3);

    scene1.setTween([timeline]);
    scene1.addTo(controller);

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#venue',
        triggerHook: 0,
        duration: 500
    }).setPin('#venue');

    var timeline2 = new TimelineMax();
    timeline2.to($coralBox, 3, {height: '80px'});
    timeline2.to($mainNav, 1, {display: 'block'});
    scene2.setTween([timeline2]);
    scene2.addTo(controller);

};

var narrowAnimations = function () {};
