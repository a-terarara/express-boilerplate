exports.get = (req, res, next) => {
  let err = new Error("error message.");
  err.status = 400;
  err.name = "SAMPLE ERROR";
  throw err;
};
