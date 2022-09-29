var username = new URL(location.href).searchParams.get("username");
var user;

$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    getUsuario().then(function () {
        
        $("#mi-perfil-btn").attr("href","profile.html?username=" + username);
        


        getProducto(false, "ASC");

        $("#ordenar-genero").click(ordenarProducto);
    });
});


async function getUsuario() {

    await $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletUsuarioPedir",
        data: $.param({
            username: username
        }),
        success: function (result) {
            let parsedResult = JSON.parse(result);

            if (parsedResult != false) {
                user = parsedResult;
            } else {
                console.log("Error recuperando los datos del usuario");
            }
        }
    });

}
function getProducto(ordenar, orden) {

    $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletProductolaListar",
        data: $.param({
            ordenar: ordenar,
            orden: orden
        }),
        success: function (result) {
            let parsedResult = JSON.parse(result);

            if (parsedResult != false) {
                mostrarProducto(parsedResult);
            } else {
                console.log("Error recuperando los datos de las peliculas");
            }
        }
    });
}
function mostrarProducto(producto) {

    let contenido = "";

    $.each(producto, function (index, producto) {

        producto = JSON.parse(producto);
 
            contenido += '<tr><th scope="row">' + producto.id + '</th>' +                   
                    '<td>' + producto.nombre + '</td>' +
                    '<td>' + producto.tipo + '</td>' +
                    '<td>' + producto.proveedor + '</td>' +
                    '<td>' + producto.volumen + '</td>' +
                    '<td>' + producto.tiempo + '</td>'                                    
        });
    $("#peliculas-tbody").html(contenido);
}

function ordenarProducto() {

    if ($("#icono-ordenar").hasClass("fa-sort")) {
        getProducto(true, "ASC");
        $("#icono-ordenar").removeClass("fa-sort");
        $("#icono-ordenar").addClass("fa-sort-down");
    } else if ($("#icono-ordenar").hasClass("fa-sort-down")) {
        getProducto(true, "DESC");
        $("#icono-ordenar").removeClass("fa-sort-down");
        $("#icono-ordenar").addClass("fa-sort-up");
    } else if ($("#icono-ordenar").hasClass("fa-sort-up")) {
        getProducto(false, "ASC");
        $("#icono-ordenar").removeClass("fa-sort-up");
        $("#icono-ordenar").addClass("fa-sort");
    }
}
function alquilarProducto(id) {

    $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletPeliculaAlquilar",
        data: $.param({
            id: id,
            username: username

        }),
        success: function (result) {
            let parsedResult = JSON.parse(result);

            if (parsedResult != false) {
                restarDinero(precio).then(function () {
                    location.reload();
                })
            } else {
                console.log("Error en la reserva de la película");
            }
        }
    });
}


async function restarDinero(precio) {

    await $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletUsuarioRestarDinero",
        data: $.param({
            username: username,


        }),
        success: function (result) {
            let parsedResult = JSON.parse(result);

            if (parsedResult != false) {

            } else {
                console.log("Error en el proceso de pago");
            }
        }
    });
}