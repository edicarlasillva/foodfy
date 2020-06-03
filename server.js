const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

app.use(express.static("public"));

nunjucks.configure("views", {
  express: app,
  autoescape: true,
  watch: true,
});

app.set("view engine", "njk");

app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/about", (req, res) => {
  return res.render("about");
});

app.get("/recipes", (req, res) => {
  return res.render("recipes");
});

app.listen(3333, () => {
  console.log("Server is running!");
});
