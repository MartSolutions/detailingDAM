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
