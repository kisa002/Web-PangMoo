$(document).ready(function() {
    init();
    todo();
    
    function todo() {
        console.log("selected 와 select구분해야함");
    }
    
    function init() {
        initMouse();
        initAnimations();
    }
    
    function initMouse() {
        $('.nav li:not(.social)').on('mouseenter', function(event) {
            $(this).css('background-color', '#EFEFEF');
        });
        
        $('.nav li:not(.social)').on('mouseleave', function(event) {
//            $(this).removeAttr('selected');
            
            if(!$(this).attr('selected'))
                $(this).css('background-color', '#FFFFFF');
        });
        
        $('.nav li:not(.social)').on('click', function(event) {
            $('.nav li').css('background-color', '#FFFFFF');
            $('.nav li').removeAttr('selected');
            
            $(this).attr('selected', '');
            $(this).css('background-color', '#EFEFEF');
        });
    }
    
    function initAnimations() {
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1200, 'swing', function () {
                window.location.hash = target;
            });
        });
    }
    
    function goSection(e){
        var offset = $(e).offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    }
});