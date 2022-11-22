const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosShema = new Schema({
    id_producto:{type: String, required: true, max:60},
    nombre_producto:{type: String, required: true, max:80},
    descripcion_producto:{type: String, required: true, max:150},
    precio_producto:{type: String, required: true, max:100},
    inventario_producto:{type: String, required: true, max:70},
    categoria_producto:{type: String, required: true, max:70}
});

module.exports = mongoose.model("Productos", ProductosShema); 