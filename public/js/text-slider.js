$(window).ready(function () {
    var $sliderWrap = $('#js-text-slider-wrap');
    var $sliderUl = $sliderWrap.find('ul');

    var initedSlider = $sliderUl.bxSlider({
        controls: false,
        pager: true,
        pagerSelector: '#js-text-slider-pager',
        auto: false
    });

    $('#js-text-slider-prev').click(function () {
        initedSlider.goToPrevSlide();
        return false;
    });
    $('#js-text-slider-next').click(function () {
        initedSlider.goToNextSlide();
        return false;
    });
});