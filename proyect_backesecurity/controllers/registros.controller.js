const Registro = require("../models/registros.model")
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let registro = new Registro({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        email : req.body.email,
        departamento: req.body.departamento,
        ciudad: req.body.ciudad,
        direccion : req.body.direccion
    })

    registro.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al registrar el usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El usuario se registró correctamente"
        res.json(response)
    })
}

exports.find = function(req, res){
    Registro.find(function(err, registros){
        res.json(registros)
    })
}

exports.findOne = function(req,res){ 
    Registro.findOne({_id: req.params.id},function(err, registro){ 
        res.json(registro) 
    }) 
}

exports.update = function(req, res){
    let registro = {
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        email : req.body.email,
        departamento: req.body.departamento,
        ciudad: req.body.ciudad,
        direccion : req.body.direccion
    }
    Registros.findByIdAndUpdate(req.params.id, {$set: registro}, function (err,){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar los datos de registro"
            response.json(response)
            return;
        }
        response.exito = true,
        response.msg = "Los datos de registro de modificaron correctamente"
        response.json(response)
    })
}