$(window).ready(function () {
    var $sliderWrap = $('#js-feedslider-wrap');
    var $sliderUl = $sliderWrap.find('ul');

    var initedSlider = $sliderUl.bxSlider({
        controls: false,
        pager: true,
        pagerSelector: '#js-feedslider-pager',
        auto: false
    });

    $('#js-feedslider-prev').click(function () {
        initedSlider.goToPrevSlide();
        return false;
    });
    $('#js-feedslider-next').click(function () {
        initedSlider.goToNextSlide();
        return false;
    });
});