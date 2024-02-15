let htmlPasswdField = document.getElementById("htmlpasswd")
let htmlUserField = document.getElementById("htmluser")
let resultField = document.getElementById("result");

function verifyIfValid() {
    return htmlUserField.value.trim().length !== 0 && htmlPasswdField.value.trim().length
}

function login() {
    if (!verifyIfValid()) {
        resultField.textContent = "Ingrese un usuario y/o contraseña."
        setTimeout(function () {
            resultField.textContent = ""
        }, 3000)

        return
    }

    resultField.innerHTML = "Iniciada sesion con exito <b>" + htmlUserField.value;
}

function signup() {
    if (!verifyIfValid()) {
        resultField.textContent = "Ingrese un usuario y/o contraseña."
        setTimeout(function () {
            resultField.textContent = ""
        }, 3000)

        return
    }
    resultField.innerHTML = "Registrado con exito <b>" + htmlUserField.value;
}