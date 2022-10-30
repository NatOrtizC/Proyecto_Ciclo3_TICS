var username = new URL(location.href).searchParams.get("username");
var user;

$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    getUsuario().then(function () {

        $("#mi-perfil-btn").attr("href", "profile.html?username=" + username);

        $("#user-saldo").html(user.saldo.toFixed(2) + "$");

        getProducto(false, "ASC");

        $("#ordenar-proveedor").click(ordenarProducto);
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
        url: "./ServletProductoListar",
        data: $.param({
            ordenar: ordenar,
            orden: orden
        }),
        success: function (result) {
            let parsedResult = JSON.parse(result);

            if (parsedResult != false) {
                mostrarProductos(parsedResult);
            } else {
                console.log("Error recuperando los datos de los productos");
            }
        }
    });
}

function mostrarProductos(producto) {

    let contenido = "";

    $.each(producto, function (index, producto) {

        producto = JSON.parse(producto);
        let precio;

        if (producto.volumen > 0) {

            if (user.premium) {
                precio = (2 - (2 * 0.1));
            } else {
                precio = 2;
            }

            contenido += '<tr><th scope="row">' + producto.id + '</th>' +
                    '<td>' + producto.nombre + '</td>' +
                    '<td>' + producto.tipo + '</td>' +
                    '<td>' + producto.proveedor + '</td>' +
                    '<td>' + producto.volumen + '</td>' +
                    '<td>' + producto.tiempo + '</td>' +
                    '<td><img src="' + producto.imagen + '" class="card-img-top"></td>'+
                    '<td>' + producto.descripcion + '</td>' +
                    '<td>' + precio + '</td>' +
                    '<td><button onclick="registrarProducto(' + producto.id + ',' + precio + ');" class="btn btn-success" ';
            if (user.saldo < precio) {
                contenido += ' disabled ';
            }

            contenido += '>Registrar</button></td></tr>'

        }
    });
    $("#productos-tbody").html(contenido);
}


function ordenarProducto() {

    if ($("#icono-ordenar").hasClass("fa-sort")) {
        getPeliculas(true, "ASC");
        $("#icono-ordenar").removeClass("fa-sort");
        $("#icono-ordenar").addClass("fa-sort-down");
    } else if ($("#icono-ordenar").hasClass("fa-sort-down")) {
        getPeliculas(true, "DESC");
        $("#icono-ordenar").removeClass("fa-sort-down");
        $("#icono-ordenar").addClass("fa-sort-up");
    } else if ($("#icono-ordenar").hasClass("fa-sort-up")) {
        getPeliculas(false, "ASC");
        $("#icono-ordenar").removeClass("fa-sort-up");
        $("#icono-ordenar").addClass("fa-sort");
    }
}

function registrarProducto(id, precio) {

    $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletProductoRegistrar",
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
                console.log("Error al registrar el producto");
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
            saldo: parseFloat(user.saldo - precio)

        }),
        success: function (result) {
            let parsedResult = JSON.parse(result);

            if (parsedResult != false) {
                console.log("Saldo actualizado");
            } else {
                console.log("Error en el proceso de pago");
            }
        }
    });
}