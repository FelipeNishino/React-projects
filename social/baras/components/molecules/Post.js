import React, { useCallback } from "react";

export const Post = ({
  id,
  user,
  image,
  text,
  likes,
  createdAt,
  handleLike
}) => {
  const onLike = useCallback(() => {
    handleLike(id);
  }, [id, handleLike]);

  const transformDate = (date) => {
    const normal = new Date(date);
    return `${normal.toLocaleDateString()} ${normal.toLocaleTimeString()}`;
  };

  return (
    <article>
      <h2>
        {user} <small>{transformDate(createdAt)}</small>
      </h2>
      <img src={URL.createObjectURL(image)} alt="Content" />
      <p>{text}</p>
      <button onClick={onLike}>Likes ({likes})</button>
    </article>
  );
};
