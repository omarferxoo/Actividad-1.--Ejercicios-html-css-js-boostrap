function verificar() {
    var edad = document.getElementById("edad").value;
    var resultado = document.getElementById("resultado");

    if (edad === "") {
        alert("Por favor ingresa tu edad.");
        resultado.value = "";
        return;
    }

    edad = parseInt(edad);

    if (isNaN(edad) || edad <= 0) {
        alert("Ingresa una edad válida.");
        resultado.value = "";
        return;
    }

    if (edad >= 18) {
        resultado.value = "Puedes votar";
    } else {
        resultado.value = "No puedes votar";
    }
}