console.log("Hello world!");

let x2 = "Daya";
console.log("Valor inicial de x2: ", x2, "Tipo de dato: ", typeof x2);

x2 = 10;
console.log("Valor de x2: ", x2, "Tipo de dato: ", typeof x2);

const constante = 10;
console.log("Valor de constante: ", constante);

/*
aqui se rompe porque a una variable de tipo constante no se le puede asignar otro valor
constante = 20;
*/

console.log("Opreadores lógicos");

/**
 * JavaScript: cualquier valor puede ser verdadero (Truthy) o falso (Falsy)
 * -falso: false, 0, -0, 0n, "", null, undefined, NaN
 * -verdadero: cualquier otro valor
 */

let variableBool = false;
if(variableBool){
    console.log("1. Entra a el bloque si/true");
} else {
console.log("2. Entra a el bloque else/false");
}

let mesaje = "Hola";
if(mesaje){
    console.log("3. Entra a el bloque si/true");
} else {
    console.log("4. Entra a el bloque else/false");
}

let numero6 = 6;
let string6 = "6";
console.log("Comparacion débil (6 == '6'): ", numero6 == string6);
console.log("Comparacion estricta (6 === '6'): ", numero6 === string6);