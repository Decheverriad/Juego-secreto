function bienvenida () {
    console.log("Hola Mundo");
    }
bienvenida();

function bienvenidaNombre (nombre) {
   console.log(`Hola ${nombre}`);
}

bienvenidaNombre("Santiago");

function dobleDeUnNumero (numero) {
 return numero * 2;

}
let resultadoDoble = dobleDeUnNumero (2547);
console.log(resultadoDoble);

function promedio(numero1,numero2,numero3){
    return (numero1 + numero2 + numero3) / 3;

}
let resultadoPromedio = promedio(10,10,10);
console.log(resultadoPromedio);

function numeroMayor (numero1,numero2){
    return numero1 > numero2 ? numero1 : numero2;
}
let resultadoMayor = numeroMayor(9,5);
console.log(resultadoMayor);

function multiplicarNumero(numero){
    return numero * numero ;
}
let resultadoMultiplicador = multiplicarNumero(10);
console.log (resultadoMultiplicador);
