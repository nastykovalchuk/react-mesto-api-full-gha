import React from "react";
import { Navigate } from "react-router-dom";
import AuthForm from "./AuthForm";

function Login({ isLoggedIn, onLogin }) {
  if (isLoggedIn) {
    return <Navigate to="/" replace/>;
  }

  return (
    <>
      <h2 className="auth__title">Вход</h2>
      <AuthForm submitAction={onLogin} buttonText={"Войти"} />
    </>
  );
}

export default Login;
