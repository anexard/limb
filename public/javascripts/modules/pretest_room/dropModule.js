$(window).ready(() => {
    $('.page').click(() => {
        if($('.drop').css('display') == 'none') {
            $('.drop').fadeIn(200);
            $('.shadow').fadeIn(200);
            $('.arrow').css({'transform':'rotate(-180deg)', 'transition':'all .3s ease-out'});
        }
        else {
            $('.drop').fadeOut(200);
            $('.shadow').fadeOut(200);
            $('.arrow').css({'transform':'rotate(0deg)', 'transition':'all .3s ease-out'});
        }
    });
    
    $('.lines').click(() => {
        if($('.drop').css('display') == 'block') {
            $('.drop').fadeOut(200);
            $('.header_menu').fadeIn(200);
            $('.arrow').css({'transform':'rotate(0deg)', 'transition':'all .3s ease-out'});
        }
        else if($('.header_menu').css('display') == 'none') {
            $('.header_menu').fadeIn(200);
            $('.shadow').fadeIn(200);
        }
        else {
            $('.header_menu').fadeOut(200);
            $('.shadow').fadeOut(200);
        }
    });
    
    $('.shadow').click(() => {
        if($('.drop').css('display') == 'block') {
            $('.drop').fadeOut(200);
            $('.shadow').fadeOut(200);
            $('.arrow').css({'transform':'rotate(0deg)', 'transition':'all .3s ease-out'});
            
        } 
        else {
            $('.header_menu').fadeOut(200);
            $('.shadow').fadeOut(200);
        }
    });
});