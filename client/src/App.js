import React from "react";
import PostCreate from "./Components/Posts/PostCreate";
import PostList from "./Components/Posts/PostList";

export default function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}
