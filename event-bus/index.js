const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
const port = 4005;

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  }); // posts

  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  }); // comments

  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  }); // query

  res.send({ status: "OK" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
