Feed.jsimport React from "react";
import { Header } from "../organisms/Header";
import { PostBar } from "../organisms/PostBar";
import { PostList } from "../organisms/PostList";

export const FeedTemplate = ({
  posts,
  user,
  handleLogin,
  handleLogout,
  handlePublish,
  handleLike
}) => (
  <>
    <Header user={user} handleLogin={handleLogin} handleLogout={handleLogout} />
    {!!user && <PostBar handlePublish={handlePublish} />}
    <PostList posts={posts} handleLike={handleLike} />
  </>
);
