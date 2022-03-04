Feed.jsimport React, { useCallback, useState } from "react";
import { FeedTemplate } from "../components/templates/Feed";

export const FeedPage = () => {
  const [user, setUser] = useState("Barão");
  const [posts, setPosts] = useState([]);

  const handleLogin = useCallback(
    (user) => {
      setUser(user);
    },
    [setUser]
  );

  const handleLogout = useCallback(() => {
    setUser(undefined);
  }, [setUser]);

  const handlePublish = useCallback(
    (text, image) => {
      const now = new Date();
      const newPost = {
        id: posts.length + 1,
        text,
        image,
        user,
        likes: 0,
        createdAt: now.toISOString()
      };

      setPosts((prev) => [newPost, ...prev]);
    },
    [user, posts, setPosts]
  );

  const handleLike = useCallback(
    (id) => {
      setPosts((prev) =>
        prev.map((post) => {
          if (post.id === id) {
            return { ...post, likes: post.likes + 1 };
          }

          return post;
        })
      );
    },
    [setPosts]
  );

  return (
    <FeedTemplate
      posts={posts}
      user={user}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      handlePublish={handlePublish}
      handleLike={handleLike}
    />
  );
};
