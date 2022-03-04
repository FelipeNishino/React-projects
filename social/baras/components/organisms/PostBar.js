import React from "react";
import { PostForm } from "../molecules/PostForm";

export const PostBar = ({ handlePublish }) => (
  <aside>
    <PostForm handlePublish={handlePublish} />
  </aside>
);
