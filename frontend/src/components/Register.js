import React from "react";
import { Link, Navigate } from "react-router-dom";
import AuthForm from "./AuthForm";

function Register({ isLoggedIn, onRegister }) {
  if (isLoggedIn) {
    return <Navigate to="/" replace/>;
  }

  return (
    <>
      <h2 className="auth__title">Регистрация</h2>
      <AuthForm submitAction={onRegister} buttonText={"Зарегистрироваться"} />
      <Link to="/login" className="auth__login-link">
        Уже зарегистрированы? Войти
      </Link>
    </>
  );
}

export default Register;
