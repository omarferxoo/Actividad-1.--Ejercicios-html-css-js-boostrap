const input = document.getElementById("nuevoElemento");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");
function agregarElemento(){
    let texto = input.value.trim();
    if(texto === ""){
        alert("Escribe un elemento.");
        return;
    }
    const li = document.createElement("li");
    li.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
    );
    li.appendChild(document.createTextNode(texto));
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add(
        "btn",
        "btn-danger",
        "btn-sm"
    );
    botonEliminar.addEventListener("click",function(){
        li.remove();
    });
    li.appendChild(botonEliminar);
    lista.appendChild(li);
    input.value="";
    input.focus();
}
botonAgregar.addEventListener("click",agregarElemento);
input.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        agregarElemento();
    }
});