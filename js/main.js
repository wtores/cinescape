function panelLateral(){
    let panel =document.getElementById("panel-Lateral");
    panel.classList.toggle("active");
}

function caratula(){
    let caratula= document.getElementById("modal-pelicula");
    caratula.classList.add("active"); 
}
function cerrar(){
    let cerrar= document.getElementById("modal-pelicula");
    cerrar.classList.remove("active"); 
}