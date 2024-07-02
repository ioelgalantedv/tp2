document.getElementById("boton").addEventListener("click", function(){
    const data = document.getElementById("recital").value;
    if(data){
        AgregarRecital(data)
        elimguardarRecitalLocal(data)
    }else{
        alert("Ingresá un recital al que hayas asistido")
    }
})

cargarRecitales()

function AgregarRecital(recital){
    const tarjeta = document.createElement("div")
    tarjeta.classList.add("tarjeta")

    const parrafo = document.createElement("p");
    parrafo.textContent = recital;
    tarjeta.appendChild(parrafo)

    const acciones = document.createElement("div")
    acciones.classList.add("acciones")

    const eliminar = document.createElement("a")
    eliminar.href = "#misRecitales"
    eliminar.textContent = "Eliminar"
    eliminar.classList.add("eliminar")
    eliminar.addEventListener("click", function(){
        tarjeta.remove();
        eliminarRecitales(recital)
    })

    const modificar = document.createElement("a")
    modificar.href = "#misRecitales"
    modificar.textContent = "Modificar"
    modificar.classList.add("modificar")
    modificar.addEventListener("click", function(){
        const nuevorecital = prompt("modificar recital: ", parrafo.textContent)
        if(nuevorecital){
            modificarRecitales(recital, nuevorecital)
            parrafo.textContent = nuevorecital;
        }
    })

    acciones.appendChild(eliminar)
    acciones.appendChild(modificar)
    tarjeta.appendChild(acciones)

    document.getElementById("contenedor").appendChild(tarjeta)
}

function elimguardarRecitalLocal(recital){
    let recitales = JSON.parse(localStorage.getItem("recitales")) || [];

    recitales.push(recital);

    localStorage.setItem("recitales", JSON.stringify(recitales))
}

function cargarRecitales(){
    let recitales = JSON.parse(localStorage.getItem("recitales")) || [];
    recitales.forEach(recital => {
        AgregarRecital(recital)
    });
}

function eliminarRecitales(recital){
    let recitales = JSON.parse(localStorage.getItem("recitales")) || [];
    recitales = recitales.filter(d => d != recital)
    localStorage.setItem("recitales", JSON.stringify(recitales))
}

function modificarRecitales(recitalViejo, recitalNuevo){
    let recitales = JSON.parse(localStorage.getItem("recitales")) || [];
    const index = recitales.indexOf(recitalViejo)
    if(index !== -1){
        recitales[index] = recitalNuevo;
        localStorage.setItem("recitales", JSON.stringify(recitales))
    }
}



