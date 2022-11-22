const Admin = require("../models/admins.model");
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

exports.login = function(req, res, next){

    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    Admin.findOne({ admin: req.body.admin, pass: hashedpass}, function(err, admin){
        let response = {
        token:null
        }

        if(admin !== null){
            response.token = jwt.sign({
                id: admin._id,
                admin: admin.admin
            }, "__recret__",
            { expiresIn: '12h'}
            )
        }
        res.json(response);
    })
}