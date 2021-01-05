$(function () {
    
    // adjust slider height

    var winH = $(window).height() ,
        uppH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();

    $('.slider , .carousel-item').height(winH-(uppH+navH));

    
        
    

});