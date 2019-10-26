const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

require("./config/express")(app);
require("./config/routes")(app);

app.listen(app.get("port"), () =>
  console.log(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  )
);

module.exports = app;
