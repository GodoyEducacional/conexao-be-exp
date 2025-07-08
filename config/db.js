const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

require("dotenv").config();

// Credenciais do DB
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

async function main() {
  await mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@clusterapi.h93mb.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAPI`
  );

  console.log("Conectou ao banco de dados!");
}
main().catch((err) => console.log(err));

module.exports = main;
