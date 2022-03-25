import React from "react";

export const AuthenticatedUser = ({ user, handleLogout }) => (
  <div>
    <h2>Welcome {user}</h2>
    <button onClick={handleLogout}>Logout</button>
  </div>
);
