var empleados = [];

const guardar = () => {
    //Captura el contenido de las cajas de texto
    let doc = document.getElementById("doc").value;
    let nom = document.getElementById("nom").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    //Crea un JSON
    let persona = {};
    persona.documento = doc;
    persona.nombre = nom;
    persona.telefono = tel;
    persona.email = email;
    //Guarda en empleados array
    empleados.push(persona);
    alert("Guardado con éxito");
    limpiar()
}

const listar = () =>{
    let listado = document.getElementById("lista-empleados");
    listado.innerHTML = "";
    for (const emp of empleados) {
        listado.innerHTML += `<tr>
                                <td>${emp.documento}</td>
                                <td>${emp.nombre}</td>
                                <td>${emp.telefono}</td>
                                <td>${emp.email}</td>
                            </tr>`;
    }
}

const limpiar = () => {
    document.getElementById("doc").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("email").value = "";
}