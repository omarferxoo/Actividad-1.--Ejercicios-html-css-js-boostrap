function crearGestorTareas(){
    let tareas = obtenerTareas();
    function guardarTareas(){
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }
    function obtenerTareas(){
        let datos = localStorage.getItem("tareas");

        if(datos == null){
            return [];
        }
        return JSON.parse(datos);
    }
    function agregarTarea(texto){
        let tarea = {
            nombre: texto
        };
        tareas.push(tarea);
        guardarTareas();
    }
    function eliminarTarea(indice){
        tareas.splice(indice, 1);
        guardarTareas();
    }
    function obtenerLista(){
        return tareas;
    }
    return {
        agregarTarea,
        eliminarTarea,
        obtenerLista
    };
}
const gestor = crearGestorTareas();
function agregarTarea(){
    let entrada = document.getElementById("tarea");
    let texto = entrada.value;
    if(texto == ""){
        alert("Escribe una tarea.");
        return;
    }
    gestor.agregarTarea(texto);
    entrada.value = "";
    renderizarTareas();
}
function eliminarTarea(indice){
    gestor.eliminarTarea(indice);
    renderizarTareas();
}
function renderizarTareas(){
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";
    let tareas = gestor.obtenerLista();
    tareas.forEach(function(tarea, indice){
        let li = document.createElement("li");
        li.innerHTML = `
            ${tarea.nombre}
            <button onclick="eliminarTarea(${indice})">Eliminar</button>
        `;
        lista.appendChild(li);
    });
}
renderizarTareas();