/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "favor ingresa un numero del 1 al 10";*/
// las dos codificaciones se reescriben con una nueva funcion para se utilizada de manera generica y se redujo el codigo para cada elemento a modificar

let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);




function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML =texto ;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intento);
   

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el numero en ${intento} ${(intento === 1)? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero secreto es menor");
            } else {
                asignarTextoElemento("p","El numero secreto es mayor");
            }
            intento++;
            limpiarCaja();
    }
    
    return;
}
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "" ;

}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento("p","Ya se sortearón todos los números posibles");
    }else {
    //si el numero generado esta incluido en la lista

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }  else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

}
console.log(numeroSecreto);
function condicionesIniciales(){
    asignarTextoElemento("h1" , "Juego del numero secreto");
    asignarTextoElemento("p" , `Indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}
function reiniciarJuego(){
//Limpiar caja
limpiarCaja();
// indicar mensaje de intervalo de numero
// generar numero aleatorio
// inicializar el numero de intentos
condicionesIniciales();
// deshabilitar boton de nuevo juego

document.querySelector("#reiniciar").setAttribute("disabled","true");

 }

condicionesIniciales();
// SE ACTUALIZA PARA REVISAR EN GITHUB
