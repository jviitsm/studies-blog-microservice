const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
const port = 4005;

const events = [];

app.get("/events", (req, res) => {
  res.send(events);
});

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://posts-clusterip-srv:4000/events", event).catch((err) => {
    console.log(err.message); // posts
  });

  axios.post("http://comments-srv:4001/events", event).catch((err) => {
    console.log(err.message); // comments
  });

  axios.post("http://query-srv:4002/events", event).catch((err) => {
    console.log(err.message); // query
  });

  axios.post("http://moderation-srv:4003/events", event).catch((err) => {
    console.log(err.message); // moderation
  });

  res.send({ status: "OK" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
