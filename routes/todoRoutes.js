const express = require("express");
const todoController = require("../controllers/todoControllers");
const { todoSchema } = require("../validations/todoValidations");
const validate = require("../middlewares/validate");

const router = express.Router();

router.post("/", validate(todoSchema), todoController.create);

router.put("/:id", validate(todoSchema), todoController.update);

module.exports = router;
