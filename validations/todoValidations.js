const Joi = require("joi");

const todoSchema = Joi.object({
  descricao: Joi.string().min(3).required().messages({
    "string.base": "Descrição deve ser em texto",
    "string.empty": "Descrição obrigátoria",
    "string.min": "Descricação ter pelo min. 3 carac.",
    "any.required": "Descrição obrigatória",
  }),
});

module.exports = { todoSchema };
