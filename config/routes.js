"use strict";

const rootController = require("../controllers/");

module.exports = function(app) {
  app.get("/", rootController.get);

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.stack });
  });
};
