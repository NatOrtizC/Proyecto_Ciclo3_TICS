const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegistrosShema = new Schema({
    cedula:{type: String, required: true, max:20},
    nombre:{type: String, required: true, max:50},
    apellido_p:{type: String, required: true, max:50},
    apellido_m:{type: String, required: true, max:50},
    telefono:{type: String, required: true, max:20},
    email:{type: String, required: false, max:100},
    departamento:{type: String, required: true, max:50},
    ciudad:{type: String, required: true, max:50},
    direccion:{type: String, required: false, max:100}
});

module.exports = mongoose.model("registros", RegistrosShema); 