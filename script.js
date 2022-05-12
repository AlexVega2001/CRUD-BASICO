$(document).ready(function() {
    //$("#btnAjax").click(function() {
    let dataUrl = "https://jsonplaceholder.typicode.com/users";
    let dataTable = "";
    $.get(dataUrl, function(data) {
        //console.log(data);
        //Ciclo For
        // for (let i = 0; i < data.length; i++) {
        //     console.log(`Dato ${i}: ${data[i].user}`);
        // }

        //Ciclo forEach
        data.forEach(function(item, i) {
            dataTable += "<tr>";
            dataTable += `<td> ${item.id} </td>`;
            dataTable += `<td> ${item.name} </td>`;
            dataTable += `<td> ${item.username} </td>`;
            dataTable += `<td> ${item.phone} </td>`;
            dataTable += `<td> ${item.email} </td>`;
            dataTable += `<td> ${item.website} </td>`;
            dataTable += `<td>
                            <button id='btnEditar' class='btn btn-primary' data-users = ${JSON.stringify(item).split(" ")} data-bs-toggle="modal" data-bs-target="#modalEditar">Editar</button> 
                            <button id='btnEliminar' class='btn btn-danger' data-users = ${JSON.stringify(item).split(" ")}>Eliminar</button> 
                          </td>`;
            dataTable += "</tr>";
        });
        $("#data").html(dataTable);
    });
    $(document).on('click', '#btnEditar', function() {
        // console.log($(this).data("users"));

        //Capturando la data de cada fila de la tabla.
        let data = $(this).data("users");

        //Capturando el id desde el DOM.
        let nombre = $("#nombre");
        let usuario = $("#usuario");
        let telefono = $("#telefono");
        let correo = $("#correo");
        let sitioWeb = $("#sitioWeb");

        //Asignando la data en cada input del modal.
        nombre.val(data.name.replace(',', ' '));
        usuario.val(data.username.replace(',', ' '));
        telefono.val(data.phone.replace(',', ' '));
        correo.val(data.email.replace(',', ' '));
        sitioWeb.val(data.website.replace(',', ' '));

    });

    $(document).on('click', '#btnEliminar', function() {
        alert("Elemento Eliminado!");
    });
    //});
});