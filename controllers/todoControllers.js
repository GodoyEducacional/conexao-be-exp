const ToDo = require("../models/ToDo");

exports.create = async (req, res) => {
  const { descricao } = req.body;
  try {
    const novaTarefa = new ToDo({ descricao });
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao incluir tarefa" });
  }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const { descricao } = req.body;
    try {
      const tarefas = await ToDo.findByIdAndUpdate(
        id,
        { descricao },
        { new: true }
      );
      if (!tarefas) {
        return res.status(404).json({ erro: "Tarefa não existe!" });
      }
      res.json(tarefas);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao atualizar tarefa" });
    }
  };