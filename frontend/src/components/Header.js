import React from "react";
import logo from "../images/logo.svg";
import { Link, Route, Routes } from "react-router-dom";

function Header({userEmail, onLogout}) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого" />
      <Routes>
        <Route path="/login"
          element={
            <Link className="header__link" to="/register">
              Регистрация
            </Link>
          }
        />
        <Route path="/register"
          element={
            <Link className="header__link" to="/login">
              Войти
            </Link>
          }
        />
        <Route exact path="/"
          element={
            <div className="header__profile">
              <p className="header__email">{userEmail}</p>
              <Link className="header__logout" onClick={() => onLogout()} to="/login">
                Выйти
              </Link>
            </div>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
