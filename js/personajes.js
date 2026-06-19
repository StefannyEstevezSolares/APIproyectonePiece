// Captura de elementos HTML

const contenedorPersonajes = document.getElementById("contenedor-personajes");
const inputBuscar = document.getElementById("buscar-personaje");
const btnBuscar = document.getElementById("btn-buscar");

// Variables

let personajes = [];

// Funciones útiles

function simulacionTiempoEspera(tiempo){
    return new Promise(function(resolve){
        setTimeout(resolve, tiempo);
    });
}

function limpiarPersonajes(){
    contenedorPersonajes.replaceChildren();
}

// Mostrar personajes

function mostrarPersonajes(lista){

    limpiarPersonajes();

    lista.forEach(personaje => {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("personaje");

        const nombre = document.createElement("p");
        nombre.classList.add("personaje__nombre");
        nombre.textContent = personaje.name;

        const imagen = document.createElement("img");
        imagen.setAttribute("src","./img/luffy.jpg");
        imagen.setAttribute("alt",personaje.name);

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(imagen);

        tarjeta.addEventListener("click",function(){
            window.location.href = `detalle.html?id=${personaje.id}`;
        });

        contenedorPersonajes.appendChild(tarjeta);

    });

}

// Buscar personajes

function buscarPersonajes(){

    let texto = inputBuscar.value.toLowerCase();
    let resultado = personajes.filter(personaje => {
        return personaje.name.toLowerCase().includes(texto);
    });

    mostrarPersonajes(resultado);

}

// Registro de eventos

function registroEventos(){

    btnBuscar.addEventListener("click",buscarPersonajes);
    inputBuscar.addEventListener("input",buscarPersonajes);

}

// Cargar personajes

async function cargarPersonajes(){

    try{

        contenedorPersonajes.textContent = "Buscando piratas... ";
        await simulacionTiempoEspera(1000);
        const respuesta = await fetch("https://api.api-onepiece.com/v2/characters/en");
        const datos = await respuesta.json();
        personajes = datos.slice(0,10);
        mostrarPersonajes(personajes);

    }

    catch(error){

        console.log(error);
        contenedorPersonajes.textContent = "Error al cargar personajes";

    }

}

// Ejecución

function ejecucion(){

    registroEventos();
    cargarPersonajes();

}

document.addEventListener("DOMContentLoaded",ejecucion);