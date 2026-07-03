function calcular() {
    var entrada = document.getElementById("numeros").value;

    var cajaMayor = document.getElementById("mayor");
    var cajaMenor = document.getElementById("menor");
    var cajaPromedio = document.getElementById("promedio");

    if (entrada === "") {
        alert("Por favor ingresa números separados por comas.");
        limpiarResultados();
        return;
    }

    var numeros = entrada.split(",").map(Number);

    for (var i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i])) {
            alert("Ingresa solo números válidos separados por comas.");
            limpiarResultados();
            return;
        }
    }

    var mayor = Math.max(...numeros);
    var menor = Math.min(...numeros);

    var suma = numeros.reduce(function(acumulador, valor) {
        return acumulador + valor;
    }, 0);

    var promedio = suma / numeros.length;

    cajaMayor.value = mayor;
    cajaMenor.value = menor;
    cajaPromedio.value = promedio.toFixed(2);
}

function limpiarResultados() {
    document.getElementById("mayor").value = "";
    document.getElementById("menor").value = "";
    document.getElementById("promedio").value = "";
}