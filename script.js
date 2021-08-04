let first = '#FF0000', second = '#0000FF', third = '#800080';
$(window).on("scroll touchmove", function(){
    if ($(document).scrollTop() >= $("#first").position().top){
        $('body').css('background', $("#first").attr("data-color"))
    };
    if ($(document).scrollTop() > $("#second").position().top){
        $('body').css('background', $("#second").attr("data-color"))
    };
    if ($(document).scrollTop() >= $("#third").position().top){
        $('body').css('background', $("#third").attr("data-color"))
    };
})