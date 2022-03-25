import React from "react";
import { Post } from "../molecules/Post";

export const PostList = ({ posts, handleLike }) => (
  <main>
    {posts.map((post) => (
      <Post {...post} handleLike={handleLike} key={post.id} />
    ))}
  </main>
);
