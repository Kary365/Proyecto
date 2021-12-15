

let fila1 = document.getElementById("fila1");
let rutaImagen1 = `Img/señor.jpg`;
fila1.addEventListener ("click", ()=>{cambiarfoto(rutaImagen1)})



let fila2 = document.getElementById("fila2");
let rutaImagen2 = `Img/titanic.jpeg`;
fila2.addEventListener ("click", ()=>{cambiarfoto(rutaImagen2)})



let fila3 = document.getElementById("fila3");
let rutaImagen3 = `Img/spiderman.jpg`;
fila3.addEventListener ("click", ()=>{cambiarfoto(rutaImagen3)})

let fila4 = document.getElementById("fila4");
let rutaImagen4 = `Img/avatar.jpg`;
fila4.addEventListener ("click", ()=>{cambiarfoto(rutaImagen4)})

let fila5 = document.getElementById("fila5");
let rutaImagen5 = `Img/guardianes.jpg`;
fila5.addEventListener ("click", ()=>{cambiarfoto(rutaImagen5)})


function cambiarfoto(rutaImagen){
    document.getElementById("contenedorImagen").src =String(`${rutaImagen}`);
}
