const pg = require("pg");

const db = new pg.Client({
  database: "projects",
  user: "postgres",
  host: "localhost",
  password: process.env.POSTGREPASSWORD,
  port: 5432,
});

module.exports = db;
