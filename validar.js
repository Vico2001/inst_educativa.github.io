//var form = document.getElementById("formContacto");
var form = document.querySelector("#formDocente"); // selecciona el primero que cumple con el selector
form.addEventListener('submit', validar);

function validar(event) {
    var resultado = true;
    var txtNombres = document.getElementById("nombres");//document.querySelector("#nombres"); // reotrna el primer input que tenga name ='nombres'
    var txtApellidos = document.getElementById("apellidos");
    var txtTelefono = document.getElementById("telefono");
    var txtpassword  = document.getElementById("password");

    var radiosGenero = document.getElementsByName("genero");// document.querySelectorAll("input[name='genero']");
    // si lo encuentra retorna un arreglo de radios

    var txtfecha = document.getElementById("fecha");
    var txtemail = document.getElementById("correo");

    var chkExpectativa = document.getElementById("expectativa"); // obtener un elemento check
    var checkboxsExpectativa = document.querySelectorAll(".exp");// retorna un arreglo de check

    // expresiones regulares (RegEx)
    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var telefonoreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros

     limpiarMensajes();

    //validacion para nombres
    if (txtNombres.value === '') {
        resultado = false;
        mensaje("Se necesita que introduca sus nombres", txtNombres);

    } else if (!letra.test(txtNombres.value)) { //letra.test(txtNombres.value)
        resultado = false;
        mensaje("Sólo puede ingresar texto", txtNombres);
    } else if (txtNombres.value.length > 20) {
        resultado = false;
        mensaje("Debe contar con un máximo de 20 caracteres", txtNombres);
    }

    //validacion para apellidos
    if (txtApellidos.value === '') {
        resultado = false;
        mensaje("Se necesita que introduca sus apellidos", txtApellidos);

    } else if (!letra.test(txtApellidoss.value)) { //letra.test(txtApellidos.value)
        resultado = false;
        mensaje("Sólo puede ingresar texto", txtApellidos);
    } else if (txtApellidos.value.length > 20) {
        resultado = false;
        mensaje("Debe contar con un máximo de 20 caracteres", txtApellidos);
    }

    //validacion telefono
    if (txtTelefono.value === "") {
        resultado = false;
        mensaje("Debe ingresarr su número de teléfono", txtTelefono);
    } else if (!telefonoreg.test(txtTelefono.value)) {
        resultado = false;
        mensaje("Solo se puede ingresar 10 dígitos", txtTelefono);
    }

    //validacion email
    if (txtemail.value === "") {
        resultado = false;
        mensaje("Ingrese su email", txtemail);
    } else if (!correo.test(txtemail.value)) {
        resultado = false;
        mensaje("Su email no es correto, vuelva a intentarlo", txtemail);
    }

     //validacion password
     if (txtpassword.value === "") {
        resultado = false;
        mensaje("Ingrese su contraseña", txtpassword);
    } else if (!letra.test(txtpassword.value)) {
        resultado = false;
        mensaje("Contraseña inválida", txtpassword);
    } else if (txtpassword.value.length > 6) {
        resultado = false;
        mensaje("Debe contar con un máximo de 6 caracteres", txtpassword);
    }

    //validacion radio button
    let sel = false;
    for (let i = 0; i < radiosGenero.length; i++) {
        if (radiosGenero[i].checked) {
            if (radiosGenero[i].value === "F") {

            }
            sel = true;
            let res = radiosGenero[i].value;
            break;
        }
    }
    if (!sel) {
        resultado = false;
        mensaje("Seleccione su género", radiosGenero[0]);
    }

    //validacion de un checkbox
    if (!chkExpectativa.checked) {
        resultado = false;
        // mensaje("Seleccione una expectativa., chkExpectativa);
    }

    //validacion de varios checkbox
    sel = false;
    let cont = 0;
    for (let i = 0; i < checkboxsExpectativa.length; i++) {
        if (checkboxsExpectativa[i].checked) {
            cont++;
            sel = true;
            // break;
        }
    }
    if (!sel) {
        resultado = false;
        mensaje("Seleccione una de las expectativas.", checkboxsExpectativa[0]);
    }
    if (cont < 2) {
        resultado = false;
        mensaje("Seleccione por lo menos dos expectativas.", checkboxsExpectativa[0]);
    }


    // validacion de fecha
    var dato = txtfecha.value;
    var fechaN = new Date(dato);// convertir a fecha
    var anioN = fechaN.getFullYear();

    var fechaActual = new Date();// fecha actual
    var anioA = fechaActual.getFullYear();
    if (fechaN > fechaActual) {
        resultado = false;
        mensaje("La fecha no debe ser superios a la fecha actual", txtfecha);
    } else if (anioN < 1930) {
        resultado = false;
        mensaje("El año de nacimiento no puede ser menor a 1930", txtfecha);
    } else if ((anioA - anioN) < 18) {
        resultado = false;
        mensaje("Mayor de 18 años", txtfecha);
    }

    if (!resultado) {
        event.preventDefault();  // detener el evento  //stop form from submitting
    }
}

function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
    nodoMensaje.textContent = cadenaMensaje;
    nodoMensaje.setAttribute("class", "mensajeError");
    nodoPadre.appendChild(nodoMensaje);
}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }

}