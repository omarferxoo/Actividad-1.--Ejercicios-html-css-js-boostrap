let estudiantes = [];

function agregar(){

    let nombre = document.getElementById("nombre").value;
    let calificacion = document.getElementById("calificacion").value;

    if(nombre == "" || calificacion == ""){
        alert("Completa todos los campos.");
        return;
    }

    calificacion = parseFloat(calificacion);

    if(isNaN(calificacion)){
        alert("La calificación debe ser numérica.");
        return;
    }

    let estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    estudiantes.push(estudiante);

    alert("Estudiante agregado.");

    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
}

function calcular(){

    if(estudiantes.length == 0){
        alert("Agrega estudiantes primero.");
        return;
    }

    let suma = estudiantes.reduce(function(total, estudiante){
        return total + estudiante.calificacion;
    },0);

    let promedio = suma / estudiantes.length;

    let calificacionMayor = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMenor = Math.min(...estudiantes.map(e => e.calificacion));

    let estudianteMayor = estudiantes.find(e => e.calificacion == calificacionMayor);
    let estudianteMenor = estudiantes.find(e => e.calificacion == calificacionMenor);

    document.getElementById("promedio").value = promedio.toFixed(2);

    document.getElementById("mayor").value =
    estudianteMayor.nombre + " (" + estudianteMayor.calificacion + ")";

    document.getElementById("menor").value =
    estudianteMenor.nombre + " (" + estudianteMenor.calificacion + ")";
}