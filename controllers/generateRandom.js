const { StatusCodes } = require("http-status-codes");

const getRandomQuote = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "request to get Random quotes" });
};

module.exports = {
  getRandomQuote,
};
