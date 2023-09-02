function activarPanel(){
    const contenedor = document.querySelector(".cont-colores");
    const boton = document.querySelector(".open-panel");


    contenedor.classList.toggle("active");
    boton.classList.toggle("active");

}

var link = document.getElementById("filecss")

function white(){
    link.href="css/estilocolorBlanco.css"
}

function green(){
    link.href="css/estiloColorVerde.css"
}

function predet(){
    link.href="css/estilos.css"
}