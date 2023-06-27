import React, { useState } from "react";

function AuthForm({ submitAction, buttonText }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    submitAction(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="auth__form" noValidate>
        <input
          className="auth__input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
      <button className="auth__button" type="submit">
        {buttonText}
      </button>
    </form>
  );
}

export default AuthForm;
