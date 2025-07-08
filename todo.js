const express = require("express");
require("./config/db");
const tarefasRoutes = require("./routes/todoRoutes");
const ToDo = require("./models/ToDo");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Bem vindo à API!");
});

app.use("/tarefas", tarefasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
