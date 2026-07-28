import "./MinhaConta.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { usuarioLogado } from "../../database/usuarios";

export default function MinhaConta() {

  const [nome, setNome] = useState(usuarioLogado?.nome || "");
  const [email, setEmail] = useState(usuarioLogado?.email || "");
  const [telefone, setTelefone] = useState(usuarioLogado?.telefone || "");
  const [foto, setFoto] = useState(usuarioLogado?.foto || "");

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);

  function salvar() {

    if (!usuarioLogado) return;

    usuarioLogado.nome = nome;
    usuarioLogado.email = email;
    usuarioLogado.telefone = telefone;
    usuarioLogado.foto = foto;

    if (senhaAtual !== "" || novaSenha !== "") {

      if (senhaAtual !== usuarioLogado.senha) {

        alert("Senha atual incorreta.");

        return;

      }

      if (novaSenha !== confirmarSenha) {

        alert("As senhas não coincidem.");

        return;

      }

      usuarioLogado.senha = novaSenha;

    }

    alert("Dados atualizados com sucesso!");

  }

  return (

    <div className="perfil-page">

      <div className="perfil-card">

        <img
          src={foto}
          alt="Foto do usuário"
        />

        <input

          type="file"

          accept="image/*"

          onChange={(e) => {

            const arquivo = e.target.files?.[0];

            if (!arquivo) return;

            const leitor = new FileReader();

            leitor.onload = () => {

              setFoto(leitor.result as string);

            };

            leitor.readAsDataURL(arquivo);

          }}

        />

        <label>Nome</label>

        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Email</label>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Telefone</label>

        <input
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <label>Cargo</label>

        <input
          value={usuarioLogado?.cargo}
          disabled
        />

        <hr />

        <h3>Alterar Senha</h3>

        <input

          type={mostrarSenha ? "text" : "password"}

          placeholder="Senha atual"

          value={senhaAtual}

          onChange={(e) => setSenhaAtual(e.target.value)}

        />

        <input

          type={mostrarSenha ? "text" : "password"}

          placeholder="Nova senha"

          value={novaSenha}

          onChange={(e) => setNovaSenha(e.target.value)}

        />

        <input

          type={mostrarSenha ? "text" : "password"}

          placeholder="Confirmar nova senha"

          value={confirmarSenha}

          onChange={(e) => setConfirmarSenha(e.target.value)}

        />

        <button

          type="button"

          className="senha-btn"

          onClick={() => setMostrarSenha(!mostrarSenha)}

        >

          {mostrarSenha ? <FaEyeSlash /> : <FaEye />}

          {" "}

          {mostrarSenha ? "Ocultar senha" : "Mostrar senha"}

        </button>

        <button

          className="save-btn"

          onClick={salvar}

        >

          Salvar Alterações

        </button>

      </div>

    </div>

  );

}