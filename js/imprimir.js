const v = window.location.search.substring(1);
var valor = v.split("=");
var indice = valor[1];

const liceoyfecha= "Liceo Salinas 1 - 2024";


/*********************************/
/* SELECCIONA EL GRUPO A IMPRIMIR */

grupo = grupos[indice];
var ruta = grupo[0].cod;

/*******************************/
/*******************************/

// Función para agregar una tarjeta de estudiante al catálogo
function agregarTarjeta(estudiante) {
    const catalogo = document.getElementById('catalogo');

    // Crear elementos HTML
    const card = document.createElement('div');
    card.classList.add('card');


    const card_c = document.createElement('div');
    card_c.className="card-content"
    
    const img = document.createElement('img');
    
    card_c.appendChild(img);

    if (estudiante.imagen) img.src = '../imagenes/' + ruta + '/' + estudiante.imagen;

    const nro = document.createElement('span');
    nro.textContent = `${estudiante.numeroLista}`;
    nro.className= "numero";
    card_c.appendChild(nro);
    
    const nombre = document.createElement('p');
    if (estudiante.nombre.length >= 25) {
        nombre.className = "mas-chico"; 
    } else if (estudiante.nombre.length >= 22) {
        nombre.className = "chico"; 
    }else{
        nombre.className = "normal"; 
    }
    nombre.textContent = `${estudiante.nombre}`;

    const apellido = document.createElement('p');
    if (estudiante.apellido.length >= 25) {
        apellido.className = "mas-chico";
    } else if (estudiante.nombre.length >= 22) {
        apellido.className = "chico";
    } else {
        apellido.className = "normal";
    }
    apellido.textContent = `${estudiante.apellido}`;

    // Agregar elementos al DOM
    card.appendChild(card_c);
    card.appendChild(nombre);
    card.appendChild(apellido);
    catalogo.appendChild(card);
}

function agregarInfo(datos) {
    const infogrupo = document.getElementById('grupo');
    const infoliceo = document.getElementById('liceo');
    document.title = `${datos.grupo}`;
    infogrupo.textContent = `${datos.grupo}`;
    infoliceo.textContent = liceoyfecha;
}

function ajustar(cantidad){
    const cat = document.getElementById('catalogo');
    if (cantidad > 30){
        cat.style.width="850px";  //6 columnas 
    }else{
        cat.style.width="700px";  //5 columnas 
    }    
    
    if (cantidad <= 10 ){
        cat.style.margin = "15px auto 640px";  
    }else if (cantidad <= 15 ){
        cat.style.margin = "15px auto 480px";  
    }else if (cantidad <= 20 ){
        cat.style.margin = "15px auto 300px";  
    }else if (cantidad <= 25){
        cat.style.margin = "15px auto 145px";  
    }else if (cantidad <= 30){
        cat.style.margin = "-5px auto 0px";  
    } else if (cantidad >= 35) {
        cat.style.margin = "-30px auto 40px auto"; 
    } else if (cantidad >= 31) {
        cat.style.margin = "15px auto 170px auto"; 
    }
}

function generarPagina(grupo){
    // Agregar titulo con grupo y liceo
    agregarInfo(grupo[0]);
    // Obtiene la cantidad de alumnos por hoja
    ajustar(grupo[1].length);
    // Agregar tarjetas al catálogo para cada estudiante
    grupo[1].forEach(agregarTarjeta);
}

generarPagina(grupo);
window.print();

