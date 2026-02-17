const mongoose = require("mongoose");

function dbConnection() {
  // =========================DB=============
  mongoose.
  connect(`${process.env.DB_URL}`)
  .then(() => console.log("DB Connected!"));
  // =========================DB=============
}

module.exports = dbConnection;
