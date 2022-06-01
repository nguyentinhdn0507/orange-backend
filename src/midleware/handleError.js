const handleError = async (err, req, res, next) => {
  console.log("err", err);
  res.status(500).send("Catch Error At Here");
};

module.exports = { handleError };
