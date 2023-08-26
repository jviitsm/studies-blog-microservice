const express = require("express");
const bodyParsers = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParsers.json());
app.use(cors());
const port = 4002;

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  } else if (type === "CommentCreated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  console.log(posts);
  res.send({});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
