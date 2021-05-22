$(document).ready(function(){
    var Artistico = $('#artistico').offset().top,
        Formativos = $('#formativos').offset().top,
        Musical = $('#musicales').offset().top;

    $('#btn-artistico').on('click', function(error){
        error.preventDefault();
        $('html,body').animate({
            scrollTop: Artistico - 130
        }, 500);
    });

    $('#btn-formativo').on('click', function(error){
        error.preventDefault();
        $('html,body').animate({
            scrollTop: Formativos - 130
        }, 500);
    });

    $('#btn-musical').on('click', function(error){
        error.preventDefault();
        $('html,body').animate({
            scrollTop: Musical - 130
        }, 500);
    });
});