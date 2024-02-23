const express = require("express");
const { default: helmet } = require('helmet')
const morgan = require("morgan");
const compression = require("compression")

const app = express();

//init midlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression())

//init db

//init router
app.get("/", (req, res, next) => {
  const strCompress = 'HEllo ajinomoto'
  return res.status(200).json({
    message: "hello",
    metadata: strCompress.repeat(2000)
  });
});

//init handle error

module.exports = app;
