const express = require("express")
const enforce = require("express-sslify");
const app = express();
const path = require("path");
const port = process.env.PORT || 4000;

const targetBaseUrl = "https://www.leadwallet.io";

app.use(express.static(
 path.join(__dirname, "build")
));

app.use(enforce.HTTPS({
 trustProtoHeader: true
}));

app.get("/*", (req, res) => {
 if (!req.hostname.includes("www"))
  res.redirect(targetBaseUrl);

 res.sendFile(path.join(__dirname, "build", "index.html"));
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});