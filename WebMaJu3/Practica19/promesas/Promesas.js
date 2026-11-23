function obtenerDatos() {
    //tiene tres estados
    //Pending -> Se realiza la petición
    //resolve/exito -> La petición se realizó correctamente
    //reject/fallo -> La petición falló
    //siempre tienen que ir en ese orden(resolve/reject)
    return new Promise((resolve, reject) => {
        console.log("[obtenerDatos] Iniciando la obtención de datos...");
        setTimeout(() => {
            let exito = true;
            if (exito) {
                resolve("Datos obtenidos correctamente");
            } else {
                reject("Error al obtener los datos");
            }
        }, 2000);
    });

}
//consumo básico de promesa con .then y catch
console.log("Iniciando la obtención de datos...");
obtenerDatos()
    .then((resultado) => {
        console.log("Resultado obtenido:", resultado);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

function buscarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let exito = true;
            if (exito) {
                let usuario = {
                    nombre: "Daya",
                    edad: 20
                }
                resolve(usuario);
            }else{
                reject("No se pudoobtener el usuario");
            }
        }, 4000)
    });
};

console.log("Buscar usuario con encadenamiento");

buscarUsuario()
    .then(usuario => {
        console.log("Usuario encontrado:", usuario);
        //Retornar un valor aqui la pasa al siguiente .them()
        return usuario.nombre.toUpperCase();
    })
    .then(nombreMayus => {
        console.log("Procesando nombre:", nombreMayus);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Fin del flujo");
    });