function convertir() {
    var kilometros = document.getElementById("kilometros").value;
    var resultado = document.getElementById("millas");

    if (kilometros === "") {
        alert("Por favor ingresa una distancia en kilómetros.");
        resultado.value = "";
        return;
    }

    kilometros = parseFloat(kilometros);

    if (isNaN(kilometros)) {
        alert("Ingresa un valor numérico válido.");
        resultado.value = "";
        return;
    }

    var millas = kilometros * 0.621371;

    resultado.value = millas.toFixed(5) + " millas";
}