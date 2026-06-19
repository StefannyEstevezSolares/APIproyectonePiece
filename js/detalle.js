// Captura de elementos HTML

const wantedCard = document.getElementById("wanted-card");

// Funciones útiles

function simulacionTiempoEspera(tiempo){
    return new Promise(function(resolve){
        setTimeout(resolve, tiempo);
    });
}

// Cargar detalle

async function cargarDetalle(){

    try{

        wantedCard.textContent = "Buscando pirata...";

        await simulacionTiempoEspera(1000);

        const parametros = new URLSearchParams(window.location.search);
        const id = parametros.get("id");

        const respuesta = await fetch("https://api.api-onepiece.com/v2/characters/en");
        const personajes = await respuesta.json();

        const personaje = personajes.find(personaje => {
            return personaje.id == id;
        });

        if(!personaje){
            wantedCard.textContent = "No encontramos este pirata";
            return;
        }

        mostrarPersonaje(personaje);

    }

    catch(error){

        console.log(error);
        wantedCard.textContent = "Error al cargar personaje";

    }

}

// Mostrar personaje

function mostrarPersonaje(personaje){

    wantedCard.replaceChildren();

    const titulo = document.createElement("h1");
    titulo.textContent = "WANTED";

    const nombre = document.createElement("h2");
    nombre.textContent = personaje.name;

    const imagen = document.createElement("img");
    imagen.setAttribute("src","./img/luffy.jpg");

    const vivo = document.createElement("h2");
    vivo.textContent = "DEAD OR ALIVE";

    const recompensa = document.createElement("p");
    recompensa.textContent = "Recompensa: " + personaje.bounty;

    const edad = document.createElement("p");
    edad.textContent = "Edad: " + personaje.age;

    const rol = document.createElement("p");
    rol.textContent = "Rol: " + personaje.job;

    const estado = document.createElement("p");
    estado.textContent = "Estado: " + personaje.status;

    const tripulacion = document.createElement("p");
    tripulacion.textContent = "Tripulación: " + personaje.crew.name;

    wantedCard.appendChild(titulo);
    wantedCard.appendChild(nombre);
    wantedCard.appendChild(imagen);
    wantedCard.appendChild(vivo);
    wantedCard.appendChild(recompensa);
    wantedCard.appendChild(edad);
    wantedCard.appendChild(rol);
    wantedCard.appendChild(estado);
    wantedCard.appendChild(tripulacion);

}

// Ejecución

document.addEventListener("DOMContentLoaded", cargarDetalle);