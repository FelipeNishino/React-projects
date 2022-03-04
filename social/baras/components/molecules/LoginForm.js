import React, { useCallback } from "react";

export const LoginForm = ({ handleLogin }) => {
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      handleLogin(e.target.username.value);

      e.target.reset();
    },
    [handleLogin]
  );

  return (
    <form onSubmit={handleSubmit}>
      <h2>Provide your username to post</h2>
      <input placeholder="Username" name="username" />
      <button type="submit">Login</button>
    </form>
  );
};
