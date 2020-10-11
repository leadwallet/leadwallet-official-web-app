const sslRedirect = require("heroku-ssl-redirect");
const express = require("express");
const app = express();
// enable ssl redirect
app.use(sslRedirect());
app.get("/", function (req, res) {
  res.send("hello world");
});
app.listen(3000);
