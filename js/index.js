// Captura de elementos HTML

const homeImage = document.getElementById("home-image");
const mainDescription = document.getElementById("main-description");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");


// Inicialización de variables

let indiceActual = 0;

let slides = [

    {
        descripcion: "Luffy es un joven pirata que sueña con convertirse en el Rey de los Piratas. Cuando era niño comió una Fruta del Diablo que le otorgó un cuerpo elástico como el caucho. Inspirado por Shanks, decidió emprender un viaje por los mares en busca del legendario tesoro llamado One Piece.",
        imagen: "./img/luffy.jpg"
    },

    {
        descripcion: "Durante su aventura reunió una tripulación conocida como los Piratas del Sombrero de Paja. Junto a sus amigos, visitó numerosas islas y vivió experiencias extraordinarias. En su camino enfrentó a piratas peligrosos, marines poderosos y otros enemigos temibles. También ayudó a muchas personas que sufrían injusticias y opresión. Con el paso del tiempo desarrolló nuevas habilidades y técnicas de combate para hacerse más fuerte. Además, descubrió importantes secretos sobre la historia y el gobierno de su mundo. Su historia continúa mientras lucha por alcanzar su sueño y proteger a quienes considera su familia.",
        imagen: "./img/luffy3.png"
    }

];


// Asignación de eventos

function registroEventos(){

    btnNext.addEventListener("click", function(){
        siguienteSlide();

    });

    btnPrev.addEventListener("click", function(){
        slideAnterior();

    });

}


// Funciones

function mostrarSlide(){

    homeImage.src =
        slides[indiceActual].imagen;

    mainDescription.textContent =
        slides[indiceActual].descripcion;
}


function siguienteSlide(){

    indiceActual++;
    if(indiceActual >= slides.length){
        indiceActual = 0;
    }

    mostrarSlide();
}


function slideAnterior(){

    indiceActual--;
    if(indiceActual < 0){
        indiceActual = slides.length - 1;
    }
    mostrarSlide();
}


// Ejecución

function ejecucion(){
    registroEventos();
    mostrarSlide();
}

document.addEventListener(
    "DOMContentLoaded",
    ejecucion
);