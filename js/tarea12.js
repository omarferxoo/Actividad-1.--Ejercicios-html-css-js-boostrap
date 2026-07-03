function convertir(){

    var pesos = document.getElementById("pesos").value;
    var resultado = document.getElementById("dolares");

    if(pesos == ""){
        alert("Ingrese una cantidad en pesos.");
        resultado.value = "";
        return;
    }

    pesos = parseFloat(pesos);

    if(isNaN(pesos) || pesos <= 0){
        alert("Ingrese una cantidad válida.");
        resultado.value = "";
        return;
    }

    const tasaCambio = 0.055;

    var dolares = pesos * tasaCambio;

    resultado.value = "$ " + dolares.toFixed(2) + " USD";

}