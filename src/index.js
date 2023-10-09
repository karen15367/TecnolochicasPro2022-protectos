const express = require("express");
const app = express();

const PORT = 3000;

app.get("/google", (req, res, next) => {
  res.sendfile(`${__dirname}/pages/google.html`);
});

app.get("/about", (req, res, next) => {
  res.sendfile(`${__dirname}/pages/tarjeta_about.html`);
});

app.get("/calculadora", (req, res, next) => {
  res.sendfile(`${__dirname}/pages/calculadora.html`);
});
app.get("/inicio", (req, res, next) => {
  res.sendfile(`${__dirname}/pages/inicio.html`);
});
app
  .get("/", (req, res) => {
    res.send("este es mi primer servidor!");
  })
  .listen(PORT);
