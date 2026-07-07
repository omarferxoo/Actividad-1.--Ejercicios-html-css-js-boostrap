function convertir() {
    var celsius = document.getElementById("celsius").value;
    var resultado = document.getElementById("fahrenheit");

    if (celsius === "") {
        alert("Por favor ingresa una temperatura en grados Celsius.");
        resultado.value = "";
        return;
    }
    celsius = parseFloat(celsius);
    if (isNaN(celsius)) {
        alert("Ingresa un valor numérico válido.");
        resultado.value = "";
        return;
    }
    var fahrenheit = (celsius * 9 / 5) + 32;
    resultado.value = fahrenheit.toFixed(2) + " °F";
}