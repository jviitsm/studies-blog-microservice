const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const port = 4003;

app.post("/events", async (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
