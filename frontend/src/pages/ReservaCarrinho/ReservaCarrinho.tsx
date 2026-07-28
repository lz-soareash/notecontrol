import "./ReservaCarrinho.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { reservas } from "../../database/reservas";
import { professores } from "../../data/professores";
import { cursos } from "../../data/cursos";
import { turmas } from "../../data/turmas";



export default function ReservaCarrinho() {

  const navigate = useNavigate();
  const location = useLocation();

  const carrinho = location.state?.carrinho || "";

  const [professor, setProfessor] = useState("");
  const [curso, setCurso] = useState("");
  const [turma, setTurma] = useState("");
  const [retirada, setRetirada] = useState("");
  const [devolucao, setDevolucao] = useState("");
  const [observacao, setObservacao] = useState("");

  function reservar() {

    if (
      !professor ||
      !curso ||
      !turma ||
      !retirada ||
      !devolucao
    ) {
      alert("Preencha todos os campos.");
      return;
    }

    reservas.push({
      id: Date.now(),
      professor,
      curso,
      turma,
      carrinho,
      retirada,
      devolucao,
      observacao,
     
    });

    alert("Reserva realizada com sucesso!");

    navigate("/reservas");

  }

  return (

    <div className="reserva-page">

      <h1>Nova Reserva</h1>

      <div className="campo">

        <label>Carrinho</label>

        <input
          type="text"
          value={carrinho}
          readOnly
        />

      </div>

      <div className="campo">

        <label>Professor</label>

        <select
          value={professor}
          onChange={(e)=>setProfessor(e.target.value)}
        >

          <option value="">Selecione...</option>

{professores.map((prof) => (
  <option key={prof} value={prof}>
    {prof}
  </option>
))}
        </select>

      </div>

      <div className="campo">

        <label>Curso</label>

        <select
          value={curso}
          onChange={(e)=>setCurso(e.target.value)}
        >

          <option value="">Selecione...</option>

{cursos.map((cursoItem) => (
  <option key={cursoItem} value={cursoItem}>
    {cursoItem}
  </option>
))}

        </select>

      </div>

      <div className="campo">

        <label>Turma</label>

        <select
          value={turma}
          onChange={(e)=>setTurma(e.target.value)}
        >

         <option value="">Selecione...</option>

{turmas.map((turmaItem) => (
  <option key={turmaItem} value={turmaItem}>
    {turmaItem}
  </option>
))}

        </select>

      </div>

      <div className="campo">

        <label>Retirada</label>

        <input
          type="datetime-local"
          value={retirada}
          onChange={(e)=>setRetirada(e.target.value)}
        />

      </div>

      <div className="campo">

        <label>Devolução</label>

        <input
          type="datetime-local"
          value={devolucao}
          onChange={(e)=>setDevolucao(e.target.value)}
        />

      </div>

      <div className="campo">

        <label>Observações</label>

        <textarea
          rows={5}
          value={observacao}
          onChange={(e)=>setObservacao(e.target.value)}
        />

      </div>

      <div className="botoes">

        <button
          className="cancelar"
          type="button"
          onClick={()=>navigate(-1)}
        >
          Cancelar
        </button>

        <button
          className="salvar"
          type="button"
          onClick={reservar}
        >
          Confirmar Reserva
        </button>

      </div>

    </div>

  );

}