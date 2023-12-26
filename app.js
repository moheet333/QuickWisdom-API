require("dotenv").config();
require("express-async-errors");
const cors = require("cors");

const express = require("express");
const db = require("./database/postgreClient");

const app = express();
const PORT = process.env.PORT || 3000;

const router = require("./routes/generateRandom");

app.use(cors());
app.use("/api/v1/", router);

const start = () => {
  try {
    db.connect();
    app.listen(PORT, () => {
      console.log(`Server started on port : ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
