const express = require("express");
const router = express.Router();

const { getRandomQuote } = require("../controllers/generateRandom");

router.route("/").get(getRandomQuote);

module.exports = router;
