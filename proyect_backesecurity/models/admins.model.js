const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminsSchema = new Schema({
    user:{type:String, required:true, max:60},
    pass:{type:String, required:true, max:128}
});

module.exports = mongoose.model("admins", AdminsSchema);