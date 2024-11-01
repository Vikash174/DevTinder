const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

app.use("/submit", (req, res) => {
  res.send("Hello World! Submitted");
});

app.use("/test", (req, res) => {
  res.send("Hello World! Test");
});

app.use("/", (req, res) => {
  res.send("Hello World!");
});
