const Producto = require("../models/productos.model")
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let producto = new Producto({
        id_producto: req.body.id_producto,
        nombre_producto: req.body.nombre_producto,
        descripcion_producto: req.body.descripcion_producto,
        precio_producto: req.body.precio_producto,
        inventario_producto: req.body.inventario_producto,
        categoria_producto: req.body.categoria_producto
    })

producto.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al añadir el producto en el carrito"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto se añadió correctamente al carrito"
        res.json(response)
    })
}

exports.find = function(req, res){
    Producto.find(function(err, productos){
        res.json(productos)
    })
}

exports.findOne = function(req,res){ 
    Producto.findOne({_id: req.params.id},function(err, producto){ 
        res.json(producto) 
    }) 
}

exports.update = function(req,res){
    let producto = {
        id_producto: req.body.id_producto,
        nombre_producto: req.body.nombre_producto,
        descripcion_producto: req.body.descripcion_producto,
        precio_producto: req.body.precio_producto,
        inventario_producto: req.body.inventario_producto,
        categoria_producto: req.body.categoria_producto
    }
    Productos.findByIdAndUpdate(req.params.id, {$set: producto}, function (err,){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar los valores del producto"
            response.json(response)
            return;
        }
        response.exito = true,
        response.msg = "Los valores del producto se modificaron correctamente"
        response.json(response)
    })
}