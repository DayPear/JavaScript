console.log("Seccion de funciones");
//funcion declarada
function saludar(nombre="Invitado", edad=0){
    return "Hola: "+nombre+" edad: "+ edad;
}

console.log(saludar("Ana", 26));
console.log(saludar());

//funciones anonimas
let suma = function(num1, num2){
    return num1 + num2;
}

console.log("Resultado suma: " + suma(1, 63));

//funcion flecha
let resta = (num1, num2)=>{
    return num1 - num2
}

console.log("Resultado resta: "+ resta(5, 1))

//funcion autoinvocada
/*(async function() {
    console.log("Hola desde funcion autoinvocada");
})();*/

console.log("Arreglos Dinámicos");

let numeros = [1, 2, 3];
console.log("Arreglo inicial ", numeros)

numeros.push(4);
console.log("Arreglo después del push: ", numeros);

let ultimo = numeros.pop();
console.log("Arreglo después del pop: ", numeros);

//atrae el primer elemento y aparte lo saca
let primero = numeros.shift();
console.log("Arreglo después del shift ", numeros);

console.log("Objetos");

const persona = {
    nombre: "Daya",
    edad: "20",
    carrera: "ISW",
    hobbies: ["dibujar", "dormir"]
};

console.log("Nombre: ", persona.nombre);

persona.nombre = "Gabriela";
console.log("Nombre modificado: ", persona.nombre)










