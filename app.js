require("dotenv").config();
require("express-async-errors");

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const router = require("./routes/generateRandom");

app.use("api/v1/", router);

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port : ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
