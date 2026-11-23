console.log("1.- Inicio");

setTimeout(function(){
    console.log("2.- Pasó un segundo")
}, 3000);

console.log("3.- Fin");

function prepararCafe(callback){
    console.log("Preparando cafe");
    setTimeout(function(){
        console.log("¡¡Café listo!!");
        callback();
    }, 2000)
}

prepararCafe(function(){
    console.log("Ahora si, vamos a desayunar")
})