const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const winston = require("winston");

const env = process.env.NODE_ENV || "development";

module.exports = app => {
  app.use(helmet());
  app.use(
    compression({
      threshold: 512
    })
  );

  const log = {
    stream: {
      write: msg => winston.info(msg)
    }
  };

  if (env !== "test") app.use(morgan(log));

  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
};
