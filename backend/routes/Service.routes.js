
const express = require("express")
const { ServiceController } = require("../controllers/Service.controller")
const router = express.Router()

router.get("/", ServiceController.getAll)
router.get("/:id", ServiceController.getById)
router.post("/", ServiceController.add)
router.delete("/:id", ServiceController.delete)
router.put("/:id", ServiceController.edit)

module.exports = router 
