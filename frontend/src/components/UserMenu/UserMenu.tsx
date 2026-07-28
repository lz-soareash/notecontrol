import "./UserMenu.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  usuarioLogado,
  logout,
} from "../../database/usuarios";

export default function UserMenu() {

  const navigate = useNavigate();

  const [aberto,setAberto]=useState(false);

  function sair(){

    logout();

    navigate("/login");

  }

  return(

    <div className="user-menu">

      <div

        className="user-header"

        onClick={()=>setAberto(!aberto)}

      >

        <img

          src="https://i.pravatar.cc/100"

          alt="perfil"

        />

        <div>

          <strong>{usuarioLogado?.nome}</strong>

          <small>{usuarioLogado?.cargo}</small>

        </div>

      </div>

      {

      aberto && (

      <div className="dropdown">

        <button

          onClick={()=>navigate("/minha-conta")}

        >

          👤 Minha Conta

        </button>

        <button

          onClick={()=>navigate("/alterar-senha")}

        >

          🔒 Alterar Senha

        </button>

        <button

          onClick={sair}

        >

          🚪 Sair

        </button>

      </div>

      )

      }

    </div>

  );

}