$(document).ready(function(){
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $("#menu-toggle-2").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-2");
        $('#menu ul').hide();
    });

    function initMenu() {
        $('#menu ul').hide();
        $('#menu ul').children('.current').parent().show();
        $('#menu li a').click(
            function() {
                var checkElement = $(this).next();
                if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                    return false;
                }
                if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                    $('#menu ul:visible').slideUp('normal');
                    checkElement.slideDown('normal');
                    return false;
                }
            }
        );
    }
    $(document).ready(function() {initMenu();});
    
    $(".userarrow, .userpic a").click(function(e) {
        e.preventDefault();
        $(".userpopup").toggle();
    });
    $( ".showmore" ).click(function(){
        if ($(this).attr('aria-expanded') == 'true'){
            $(this).find('span').text('Развернуть');
            $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
        }else{
            $(this).find('span').text('Свернуть');
            $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
        }
    });
    $( ".showcourses" ).click(function(){
        if ($(this).attr('aria-expanded') == 'true'){
            $(this).find('span').text('Развернуть список');
            $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
        }else{
            $(this).find('span').text('Свернуть список');
            $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
        }
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    $(".csroll, .csroll2").customScrollbar();

    $('textarea.txtarea').focus(function () {
        $(this).animate({
            height: "80px",
            borderRadius: 20
        }, 100);
    });
    $(window).resize(function() {
        if ($(window).width() < 1200) {
           $('.scrollable .viewport').width('100%');
        }
    });
    $('.selectpicker').selectpicker({
        style: 'btn-info',
        size: 4
    });
    $(".tslider").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 1
    });
    $("#range1").ionRangeSlider({

    });
});