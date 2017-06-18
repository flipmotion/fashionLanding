$(window).ready(function () {
    var $tabsList = $('#js-tabs');
    var $tabsWrap = $('#js-tabs-content');


    $tabsList.find('li>a').click(function () {
        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.siblings().removeClass('active');
            $parent.addClass('active');
            refreshTabsContent();
            return false;
        }
    });

    function refreshTabsContent() {
        var index = $tabsList.find('li.active').index();
        $tabsWrap.find('.tabs-content-item').hide();
        $tabsWrap.find('.tabs-content-item:eq(' + index + ')').show();
    }

    $tabsList.find('li:eq(0)').addClass('active');
    refreshTabsContent();
});