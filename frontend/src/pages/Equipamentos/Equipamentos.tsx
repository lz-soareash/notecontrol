import "./Equipamentos.css";

import { useState } from "react";

import Button from "../../components/common/Button/Button";
import Modal from "../../components/common/Modal/Modal";
import PageTitle from "../../components/common/PageTitle/PageTitle";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import EquipamentoCard from "../../components/equipamentos/EquipamentoCard/EquipamentoCard";
import EquipamentoToolbar from "../../components/equipamentos/EquipamentoToolbar/Equipamentotoolbar";
import EquipamentoSummary from "../../components/equipamentos/EquipamentoSummary/EquipamentoSummary";
import EquipamentoBadge from "../../components/equipamentos/EquipamentoBadge/EquipamentoBadge";

import EquipmentForm from "../../components/Forms/EquipmentForm";

import {
  Equipamento,
  equipamentos as bancoEquipamentos,
} from "../../database/equipamentos";

export default function Equipamentos() {
  const [equipamentos, setEquipamentos] = useState(bancoEquipamentos);

  const [pesquisa, setPesquisa] = useState("");

  const [abrirFormulario, setAbrirFormulario] = useState(false);

  const [modo, setModo] =
    useState<"novo" | "editar" | "visualizar">("novo");

  const [equipamentoSelecionado, setEquipamentoSelecionado] =
    useState<Equipamento | null>(null);

  const lista = equipamentos.filter((equipamento) => {
    const texto = pesquisa.toLowerCase();

    return (
      equipamento.nome.toLowerCase().includes(texto) ||
      equipamento.tipo.toLowerCase().includes(texto) ||
      equipamento.professor.toLowerCase().includes(texto) ||
      equipamento.curso.toLowerCase().includes(texto) ||
      equipamento.carrinho.toLowerCase().includes(texto) ||
      equipamento.status.toLowerCase().includes(texto) ||
      equipamento.patrimonio.toLowerCase().includes(texto)
    );
  });

  function salvarEquipamento(novo: any) {
    if (modo === "editar" && equipamentoSelecionado) {
      setEquipamentos((atual) =>
        atual.map((equipamento) =>
          equipamento.id === equipamentoSelecionado.id
            ? {
                ...equipamento,
                ...novo,
                ultimaAtualizacao: new Date().toLocaleDateString(),
              }
            : equipamento
        )
      );
    } else {
      setEquipamentos((atual) => [
        ...atual,
        {
          ...novo,
          id: atual.length + 1,
          ultimaAtualizacao: new Date().toLocaleDateString(),
        },
      ]);
    }

    setAbrirFormulario(false);
    setEquipamentoSelecionado(null);
    setModo("novo");
  }

  function removerEquipamento(id: number) {
    if (!confirm("Deseja excluir este equipamento?")) return;

    setEquipamentos((atual) =>
      atual.filter((equipamento) => equipamento.id !== id)
    );
  }

  return (
    <div className="page-content">

      <PageTitle
        title="Equipamentos"
        subtitle="Gerencie todo o inventário do laboratório."
      />

   <EquipamentoSummary
    equipamentos={equipamentos}
/>

<EquipamentoToolbar

      pesquisa={pesquisa}

      setPesquisa={setPesquisa}

      onNovo={()=>{

      setModo("novo");

      setEquipamentoSelecionado(null);

      setAbrirFormulario(true);

}}

      />

      <div className="equip-grid">

{

lista.map(

  equipamento=>(

    <EquipamentoCard

    key={equipamento.id}

    equipamento={equipamento}

    onVisualizar={()=>{

    setModo("visualizar");

    setEquipamentoSelecionado(equipamento);

    setAbrirFormulario(true);

}}

onEditar={()=>{

      setModo("editar");

      setEquipamentoSelecionado(equipamento);

      setAbrirFormulario(true);

}}

      onExcluir={()=>

      removerEquipamento(equipamento.id)

}

/>

)

)

}

</div>

      <Modal
        open={abrirFormulario}
        onClose={() => {
          setAbrirFormulario(false);
          setEquipamentoSelecionado(null);
          setModo("novo");
        }}
      >

        <EquipmentForm
          equipamento={equipamentoSelecionado}
          modo={modo}
          onSave={salvarEquipamento}
          onClose={() => {
            setAbrirFormulario(false);
            setEquipamentoSelecionado(null);
            setModo("novo");
          }}
        />

      </Modal>

    </div>
  );
}