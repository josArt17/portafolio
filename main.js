function seleccionar(link) {
    let opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    let menu = document.getElementById("nav");
    menu.className = "";
}


/* FUNCION MENU RESPONSIVE */

function responsiveMenu() {
    let boton = document.getElementById("nav");

    if (boton.className == "") {
        boton.classList.add("responsive");
    } else {
        boton.className = "";
    }

}

window.onscroll = function(){
    efectoHabilidades();
};

/* APLICANDO LA ANIMACION */

function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distanciaSkills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bootstrap").classList.add("barra-progreso3");
        document.getElementById("php").classList.add("barra-progreso4");
        document.getElementById("bd").classList.add("barra-progreso5");
        document.getElementById("react").classList.add("barra-progreso6");
        document.getElementById("laravel").classList.add("barra-progreso7");
    }
}