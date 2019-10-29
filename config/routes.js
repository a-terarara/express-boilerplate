"use strict";

const rootController = require("../controllers/");
const errorCaseController = require("../controllers/error_case");

module.exports = function(app) {
  app.get("/", rootController.get);
  app.get("/error", errorCaseController.get);

  app.use((err, req, res, next) => {
    const { status, name, message, stack } = err;
    console.error(stack);
    if (!status) res.status(500).json({ name, message });

    res.status(status).json({ name, message });
  });
};
