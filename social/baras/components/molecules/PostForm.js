import React, { useCallback } from "react";

export const PostForm = ({ handlePublish }) => {
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const [file] = e.target.image.files;

      handlePublish(e.target.text.value, file);

      e.target.reset();
    },
    [handlePublish]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="What's in your mind rn?" name="text" />
      <input type="file" name="image" />
      <button type="submit">Publish</button>
    </form>
  );
};
