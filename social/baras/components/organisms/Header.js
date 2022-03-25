import React from "react";
import { AuthenticatedUser } from "../molecules/AuthenticatedUser";
import { LoginForm } from "../molecules/LoginForm";

export const Header = ({ user, handleLogin, handleLogout }) => (
  <header>
    {!!user ? (
      <AuthenticatedUser user={user} handleLogout={handleLogout} />
    ) : (
      <LoginForm handleLogin={handleLogin} />
    )}
  </header>
);
