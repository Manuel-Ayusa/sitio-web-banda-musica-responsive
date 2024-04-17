let letra = document.getElementById('letra')
letra.addEventListener('change', cambiarFuente)

function cambiarFuente() {
    let article = document.getElementById('parrafos')
 
    if (letra.value === 'Defecto') {
        article.style.fontFamily = 'alex_brushregular';
    }

    else if (letra.value === 'Calibri' ) {
        article.style.fontFamily = 'Calibri';
    }

    else if (letra.value === 'Arial') {
        article.style.fontFamily = 'Arial';
    }

    else if (letra.value === 'caveat') {
        article.style.fontFamily = 'Caveat, cursive';
    }
}

let color = document.getElementById('color-l')
color.addEventListener('input', cambiarColor)

function cambiarColor() {
    let article = document.getElementById('parrafos')

    article.style.color = color.value ;
}

let colorFondo = document.getElementById('color-f');
colorFondo.addEventListener('input', cambiarColorFondo);

function cambiarColorFondo() {
    let main = document.getElementById('main')

    main.style.backgroundColor = colorFondo.value ;
}

let tamaño = document.getElementById('tamaño');
tamaño.addEventListener('input', cambiarTamaño);

function cambiarTamaño() {
    let letras = document.getElementsByClassName('parrafos')
   
    letras[0].style.fontSize = tamaño.value + 'rem';
    letras[1].style.fontSize = tamaño.value + 'rem';
    letras[2].style.fontSize = tamaño.value + 'rem';
    letras[3].style.fontSize = tamaño.value + 'rem';
    letras[4].style.fontSize = tamaño.value + 'rem';
    letras[5].style.fontSize = tamaño.value + 'rem';
}