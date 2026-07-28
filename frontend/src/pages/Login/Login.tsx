import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../database/usuarios";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {

    const sucesso = login(email, senha);

    if (!sucesso) {

      alert("Usuário ou senha inválidos.");

      return;

    }

    navigate("/");

  }

  return (

    <div className="login-page">

      <div className="login-box">

        <h1>NoteControl</h1>

        <input
          placeholder="Usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button onClick={entrar}>
          Entrar
        </button>

      </div>

    </div>

  );

}