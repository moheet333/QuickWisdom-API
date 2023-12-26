const { StatusCodes } = require("http-status-codes");
const db = require("../database/postgreClient");
const { CustomError } = require("../errors/CustomError");

const getRandomQuote = async (req, res) => {
  let data = [];
  try {
    await db.query("SELECT quote,author FROM quickwisdomapi", (err, result) => {
      if (err) {
        throw new CustomError("Error in fetching resource");
      } else {
        data = result.rows;
        const randomIndex = Math.floor(Math.random() * (data.length + 1));
        res
          .status(StatusCodes.OK)
          .json({
            content: data[randomIndex].quote,
            author: data[randomIndex].author,
          });
      }
    });
  } catch (error) {
    throw new CustomError("Internal Server Error");
  }
};

module.exports = {
  getRandomQuote,
};
