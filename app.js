//paso 1 de trello: crear variable de lista
let amigos = [];//variable para la lista

//paso 2 de trello: Implementa una función para agregar amigos
function agregarAmigo() {
    let datoUsuario = document.getElementById('amigo').value.trim();//toma el dato ingresado
    if (datoUsuario === '') { //si el dato ingresado es igual a *espacio vacio*
        alert('Por favor inserta un nombre');//se agrega una alerta donde debe agregar el nombre
        return; //lo para si no hay ningun dato ingresado
    } else {
        amigos.push(datoUsuario);//se agrega el dato a la lista 
    }

    console.log(datoUsuario);//esto me sirve para ver todo en la consola
    console.log(amigos);
    vaciarBox();//cuando se cumple la funcion se queda en blanco el cuadro de texto para ingresar otro nombre 
}

function vaciarBox() { //esto es lo mismo de antes, es la funcion entera para que el espacio qede en bkanco
    document.getElementById('amigo').value = ""; // del input con id amigo deja un valor igual a *nada* o *vacio*
}
//paso 3 de trello: Implementa una función para actualizar la lista de amigos
function mostrarLista() {
    let listaHTML = document.getElementById('listaAmigos'); //para traer del html el ul e integrarlo con mi lista
    listaHTML.innerHTML = "";//recorrer el ul, que no se repita nada
    
    for (let recorrer = 0; recorrer < amigos.length; recorrer++) {//recorrer es 0 para que se emoiece a contar desde 0, ya q array empieza desde 0 y no 1. mientras recorrer sea menor que la lista, se sigue
        let li = document.createElement("li"); // asigna variable y crear la lista <li>
        li.textContent = amigos[recorrer]; // asigna texto a la lista <>li
        listaHTML.appendChild(li); // lo agrega al <ul> de arriba
    }
}
//paso 4 de trello: Implementa una función para sortear
function sortearAmigo() {
    if (amigos.length === 0) { // para comprobar q la lista no este vacia
        alert("No hay amigos para sortear. Agrega al menos uno."); // mensaje por si esta vacia
        return; //aca detiene mientras siga vacia
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); // crear el math para el indice aleatorio del arreglo
    }
}
