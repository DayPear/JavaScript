import {saludar, despedir} from "./Saludo.js";

console.log(saludar("hola, maria josé"));
console.log(despedir("adiós, maria josé"));

import Estudiante from "./Estudiante.js";

let estudiante1 = new Estudiante();
estudiante1.nombre = "Daya";
estudiante1.edad = 20;
estudiante1.carrera = "Ingeniería en Software";