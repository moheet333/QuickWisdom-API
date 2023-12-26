const express = require("express");
const router = express.Router();

const { getRandomQuote } = require("../controllers/generateRandom");

router.route("/generateRandom").get(getRandomQuote);

module.exports = router;
