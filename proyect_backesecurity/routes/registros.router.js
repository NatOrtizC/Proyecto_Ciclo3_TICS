const express = require("express");
const router = express.Router();
const registrosController = require("../controllers/registros.controller")

router.post("/", registrosController.create)
router.get("/", registrosController.find)
router.get("/:id", registrosController.findOne)
router.put("/:id", registrosController.update)

module.exports = router