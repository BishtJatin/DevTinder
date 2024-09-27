const express = require("express");

const app = express();

app.use("/b", (req, res) => {
  res.send("hello");
});

app.use("/hello", (req, res) => {
  res.send("hello hello hello!");
});

app.use("/noob", (req, res) => {
  res.send("hello noob");
});

app.listen(7777, () => {
  console.log("server is successfully listning on port no 7777");
});
