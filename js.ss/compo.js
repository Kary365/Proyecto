


let fila1 = document.getElementById("fila1");
let rutaImagen1 = `Img/images.jpg`;
fila1.addEventListener ("click", ()=>{cambiarfoto(rutaImagen1)})

let fila2 = document.getElementById("fila2");
let rutaImagen2 = `Img/wb.png`;
fila2.addEventListener ("click", ()=>{cambiarfoto(rutaImagen2)})

let fila3 = document.getElementById("fila3");
let rutaImagen3 = `Img/flash.jpg`;
fila3.addEventListener ("click", ()=>{cambiarfoto(rutaImagen3)})

function cambiarfoto(rutaImagen){
    document.getElementById("contenedorImagen").src =String(`${rutaImagen}`);
}
