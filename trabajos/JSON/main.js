let container = document.getElementById('container');


const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(URL)
.then(respuest => respuest.json())
.then(promesa => {
    promesa.prophets.forEach(element => {
        let nombre = element.name + ('  ') + element.lastname;
        let datos = ('Date of Birth: ') + element.birthdate;
        let datos2 = ('Place of Birth: ') + element.birthplace;
        let imagen = element.imageurl;

    
        /* CONTENEDOR TARJETAS */

        let newDiv = document.createElement('div');
        newDiv.classList.add("shadow", "p-3", "mb-5", "bg-body", "rounded", "tarjeta");
        container.appendChild(newDiv);
       
        /* AGREGAMOS IMAGEN */
        let foto = document.createElement('img');
        foto.classList.add("card-img-top", "ig");
        newDiv.appendChild(foto);
        foto.src=imagen;

        /* AGREGAMOS DIV2 */

        let cuerpo = document.createElement('div');
        cuerpo.classList.add("card-body", "tarjeta");
        newDiv.appendChild(cuerpo);

        /* AGREGAMOS NOMBRES */

        let nom = document.createElement('H5');
        nom.classList.add("card-title", "nom");
        cuerpo.appendChild(nom);
        nom.textContent = nombre;

        /* AGREGAMOS DATOS */

        let texto = document.createElement('p');
        texto.classList.add("card-text", "tex");
        cuerpo.appendChild(texto);
        texto.textContent = datos;

        let texto2 = document.createElement('p');
        texto2.classList.add("card-text");
        cuerpo.appendChild(texto2);
        texto2.textContent = datos2;

        /* AGREGAMOS BOTON */

        let boton = document.createElement('a');
        boton.classList.add("btn", "btn-primary");
        cuerpo.appendChild(boton);
        boton.href="https://www.veniracristo.org/formulario/solicitar-visita-de-misioneros";
        boton.target="-blank";
        boton.textContent = 'Conoce más';

    })
})

