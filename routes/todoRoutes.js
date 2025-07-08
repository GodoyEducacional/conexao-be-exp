const express = require("express");
const todoController = require("../controllers/todoControllers");

const router = express.Router();

router.post("/", todoController.create);

router.put("/:id", todoController.update);

module.exports = router;
