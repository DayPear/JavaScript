class Presona{
    //funcion privada   floor es redondeo hacia abajo y random es un numero aleatorio entre 0 y 1
    #generarId(){
        return Math.floor(Math.random() * 1000);
    }

    constructor(nombre = "", edad = 0){
        this.nombre = nombre;
        this.edad = edad;
        //cuando se llaman las funciones privadas se hace con todo y gato #
        this.id = this.#generarId();
    }

    saludar(){
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años. Mi id es ${this.id}`;
    }
}

class Estudiante extends Presona{
    constructor(){
        super();
        this.carrera = "";
    }

    estudiar(){
        return `${this.nombre} está estudiando`;
    }
}