const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("./client/build"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
