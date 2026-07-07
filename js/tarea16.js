const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) =>
    b != 0 ? a / b : "Error: División por cero";
function calcularOperacion(tipo){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    if(numero1=="" || numero2==""){
        Swal.fire({
            icon:'error',
            title:'Campos vacíos',
            text:'Ingresa ambos números.'
        });
        return;
    }
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    if(isNaN(numero1) || isNaN(numero2)){
        Swal.fire({
            icon:'error',
            title:'Dato inválido',
            text:'Solo se permiten números.'
        });
        return;
    }
    let resultado;
    switch(tipo){
        case "suma":
            resultado = sumar(numero1,numero2);
        break;
        case "resta":
            resultado = restar(numero1,numero2);
        break;
        case "multiplicacion":
            resultado = multiplicar(numero1,numero2);
        break;
        case "division":
            resultado = dividir(numero1,numero2);
        break;
    }
    document.getElementById("resultado").value = resultado;
}