import "./EquipmentForm.css";
import { useState } from "react";

import { professores } from "../../database/professores";
import { cursos } from "../../database/cursos";
import { carrinhos } from "../../database/carrinhos";

type Equipamento = {
  nome: string;
  modelo: string;
  patrimonio: string;
  numeroSerie: string;
  tipo: string;
  status: string;
  carrinho: string;
  professor: string;
  curso: string;
  sala: string;
};

type Props = {
  onSave: (equipamento: Equipamento) => void;
  equipamento?: Equipamento | null;
  modo?: "novo" | "editar" | "visualizar";
  onClose: () => void;
};

export default function EquipmentForm({
  onSave,
  equipamento,
  modo = "novo",
  onClose,
}: Props) {

  const visualizando = modo === "visualizar";

  const [nome, setNome] = useState(equipamento?.nome || "");
  const [modelo, setModelo] = useState(equipamento?.modelo || "");
  const [patrimonio, setPatrimonio] = useState(equipamento?.patrimonio || "");
  const [serie, setSerie] = useState(equipamento?.numeroSerie || "");

  const [tipo, setTipo] = useState(
    equipamento?.tipo || "Notebook"
  );

  const [status, setStatus] = useState(
    equipamento?.status || "Disponível"
  );

  const [carrinho, setCarrinho] = useState(
    equipamento?.carrinho || ""
  );

  const [professor, setProfessor] = useState(
    equipamento?.professor || ""
  );

  const [curso, setCurso] = useState(
    equipamento?.curso || ""
  );

  const [sala, setSala] = useState(
    equipamento?.sala || ""
  );

  function salvarEquipamento() {

    const novoEquipamento: Equipamento = {

      nome,
      modelo,
      patrimonio,
      numeroSerie: serie,
      tipo,
      status,
      carrinho,
      professor,
      curso,
      sala,

    };

    onSave(novoEquipamento);

    onClose();

  }

  return (

    <div className="equipment-form">

      <h2>

        {
          modo === "novo"
            ? "Novo Equipamento"
            : modo === "editar"
            ? "Editar Equipamento"
            : "Visualizar Equipamento"
        }

      </h2>

      <div className="form-grid">
                <div>

          <label>Nome</label>

          <input
            value={nome}
            disabled={visualizando}
            onChange={(e) => setNome(e.target.value)}
          />

        </div>

        <div>

          <label>Modelo</label>

          <input
            value={modelo}
            disabled={visualizando}
            onChange={(e) => setModelo(e.target.value)}
          />

        </div>

        <div>

          <label>Patrimônio</label>

          <input
            value={patrimonio}
            disabled={visualizando}
            onChange={(e) => setPatrimonio(e.target.value)}
          />

        </div>

        <div>

          <label>Número de Série</label>

          <input
            value={serie}
            disabled={visualizando}
            onChange={(e) => setSerie(e.target.value)}
          />

        </div>

        <div>

          <label>Tipo</label>

          <select
            value={tipo}
            disabled={visualizando}
            onChange={(e) => setTipo(e.target.value)}
          >

            <option>Notebook</option>
            <option>Tablet</option>
            <option>Chromebook</option>
            <option>Desktop</option>

          </select>

        </div>

        <div>

          <label>Status</label>

          <select
            value={status}
            disabled={visualizando}
            onChange={(e) => setStatus(e.target.value)}
          >

            <option>Disponível</option>
            <option>Reservado</option>
            <option>Em uso</option>
            <option>Manutenção</option>

          </select>

        </div>

        <div>

          <label>Carrinho</label>

          <select
            value={carrinho}
            disabled={visualizando}
            onChange={(e) => setCarrinho(e.target.value)}
          >

            <option value="">Selecione...</option>

            {carrinhos.map((c) => (

              <option
                key={c.id}
                value={c.nome}
              >
                {c.nome}
              </option>

            ))}

          </select>

        </div>

        <div>

          <label>Professor</label>

          <select
            value={professor}
            disabled={visualizando}
            onChange={(e) => setProfessor(e.target.value)}
          >

            <option value="">Nenhum</option>

            {professores.map((p) => (

              <option
                key={p.id}
                value={p.nome}
              >
                {p.nome}
              </option>

            ))}

          </select>

        </div>

        <div>

          <label>Curso</label>

          <select
            value={curso}
            disabled={visualizando}
            onChange={(e) => setCurso(e.target.value)}
          >

            <option value="">Nenhum</option>

            {cursos.map((c) => (

              <option
                key={c.id}
                value={c.nome}
              >
                {c.nome}
              </option>

            ))}

          </select>

        </div>

        <div>

          <label>Sala</label>

          <input
            value={sala}
            disabled={visualizando}
            onChange={(e) => setSala(e.target.value)}
          />

        </div>

      </div>

      {!visualizando && (

        <button
          className="save-btn"
          onClick={salvarEquipamento}
        >

          {modo === "editar"
            ? "Salvar Alterações"
            : "Salvar Equipamento"}

        </button>

      )}

      <button
        className="cancel-btn"
        onClick={onClose}
      >

        Fechar

      </button>

    </div>

  );

}
