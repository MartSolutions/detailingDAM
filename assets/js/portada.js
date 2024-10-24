// Función para hacer que el fondo se mueva lentamente al hacer scroll
window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;  // Obtiene la cantidad de desplazamiento de la página
    let background = document.querySelector('.parallax'); // Selecciona el contenedor con el fondo
    let bgtop = document.querySelector('.bgtop'); // Selecciona el contenedor con el fondo
    // let scrollf = document.querySelector('.scrollf'); // Selecciona el contenedor con el fondo

    // Ajusta la posición del fondo a medida que se hace scroll
    background.style.backgroundPositionY = - (scrollPosition * 0.125) + 'px';
    bgtop.style.backgroundPositionY = -(scrollPosition * 0.125) + 'px';
    // scrollf.style.backgroundPositionY = (scrollPosition * 0.125) + 'px';
});


$(document).ready(function(){
    $(".content-service").on('click',function() {
        //Si tiene la clase selected
        console.log("Click en servicios")
        //Si no tiene la clase selected
        if (!$(this).hasClass('selected')) {
            $(this).find('.title').css({'transform': 'translateY(0)', 'opacity': 1});
            $(this).find('.back').css({'transform': 'translateY(-45vh)', 'opacity': 0});
            setTimeout(() => {
                $('.conten-service.selected').find('.back').css({'color': '#fff'});
                $(this).addClass('selected')
                return;
            }, 450);
        }else if ($(this).hasClass('selected')) {
            $(this).find('.title').css({'transform': 'translateY(-10vh)', 'opacity': 0});
            $(this).find('.back').css({'transform': 'translateY(0)', 'color':'#fff','opacity': 1});
            setTimeout(() => {
                 $(this).removeClass('selected')
                return;

            }, 450);
       }

        
        
    });
})

