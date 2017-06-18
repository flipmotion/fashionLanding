$(window).ready(function () {
    var $sliderUl = $('#js-slider2');
    var $sliderPager = $('#js-slider2-pager');
    var $initedSlider = $sliderUl.bxSlider({
        controls: false,
        pager: true,
        pagerSelector: '#js-slider2-pager',
        auto: false,
        onSliderLoad: function (currentIndex) {
            refreshPager();
        },
        onSliderResize: function (currentIndex) {
            refreshPager();
        }
    });

    function refreshPager() {
        $sliderUl.find('li:not(.bx-clone)').each(function (indexInArray, value) {
            var bxPagerText = $(value).data('bxpager-text');
            var pagerItem = $sliderPager.find('a.bx-pager-link').get(indexInArray);
            if (pagerItem) {
                $(pagerItem).html(bxPagerText);
            }
        });
    }
});