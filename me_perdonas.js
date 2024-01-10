function mostrarMensajeCigarro() {
    document.getElementById('mensajeDejaCigarro').style.display = 'block';
    document.getElementById('cigarro').style.display = 'none';
    document.getElementById('2').style.display = 'none';
}

function ocultarMensajeCigarro() {
    document.getElementById('cigarro').style.display = 'block'; //none para ocultar
    document.getElementById('cigarro').style.display = 'none';
}

function moverNo() {
    let nob = document.getElementById("No");
    let alto = random(1, 10);
    let ancho = random(1, 10);
    console.log(alto, ancho);
    nob.style.gridRow = alto;
    nob.style.gridColumn = ancho;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function mostrarMensajeTeAmo() {
    document.getElementById('gracias').removeAttribute('hidden');
    document.getElementById('gracias').style.display = 'inline-block';
    document.getElementById('audio').play(); 
    console.log('Te amo');
    document.getElementById('1').style.color = 'transparent';
    document.getElementById('Si').style.display = 'none';
    document.getElementById('No').style.display = 'none';
    document.getElementById('mensajeDejaCigarro').style.display = 'none';
    document.getElementById('1').style.display = 'none';
    document.getElementById('carta').style.display = 'none';
    document.getElementById('cancionContainer').style.display = 'block';
    // No es necesario ocultar '1' dos veces
    // document.getElementById('1').style.display = 'none'; // Oculta el texto "Me Perdonas"
}


