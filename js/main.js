$(document).ready(function(){
    var Horario = $('#horarios').offset().top,
        Ubicacion = $('#ubicacion').offset().top,
        Inicio = $('#inicio').offset().top;
    
    $('#btn-inicio').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: Inicio
        }, 500);
    });
    $('#btn-horarios').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: Horario - 120
        }, 500);
    });
    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: Ubicacion -100
        }, 500);
    });

});
// $("#pagina_cursos").ready(function(){
//     var Artistico = $('#artistico').offset().top,
//         Formativos = $('#formativos').offset().top,
//         Musical = $('#musicales').offset().top;
        
//     $('#btn-artistico').on('click', function(e){
//         e.preventDefault();
//         $('html,body').animate({
//             scrollTop: Artistico
//         }, 500);
//     });

//     $('#btn-formativo').on('click', function(e){
//         e.preventDefault();
//         $('html,body').animate({
//             scrollTop: Formativos -90
//         }, 500);
//     });

//     $('#btn-musical').on('click', function(e){
//         e.preventDefault();
//         $('html,body').animate({
//             scrollTop: Musical -100
//         }, 500);
//     });

/* 
Básicamente lo que he hecho ha sido primero crear unas variables para guardar los elementos con la ID Horarios, Ubicación e Inicio. 
Después he creado unas funciones con unos eventos de Click, seleccionando a los objetos con las IDs btn-inicio, btn-horarios y btn-ubicación
y he "ordenado" al script que cuando se haga click en uno de estos elementos con esos IDs, se haga la animación de Scroll hacia la variable 
pertinente, a una velocidad de 500 milisegundos (creo que son milisegundos).
*/
/*He hecho exactamente lo mismo con cursros.html pero no funciona no se por que. */