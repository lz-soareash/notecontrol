import "./Carrinhos.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/common/PageTitle/PageTitle";
import CarrinhoSummary from "../../components/Carrinho/CarrinhoSummary/CarrinhoSummary";

import CarrinhoToolbar from "../../components/Carrinho/CarrinhoToolbar/CarrinhoToolbar";

import CarrinhoCard from "../../components/Carrinho/CarrinhoCard/CarrinhoCard";



import { equipamentosCarrinhos } from "../../data/equipamentosCarrinhos";

const carrinhos = [
  {
    id: 1,
    nome: "Carrinho DS 2º Ano",
    curso: "2º Desenvolvimento de Sistemas",
    professor: "Professor Maria",
    equipamentos: 36,
    status: "Livre",
  },
  {
    id: 2,
    nome: "Carrinho DS/CD 3º Ano",
    curso: "3º DS / 3º CD",
    professor: "Professor João",
    equipamentos: 36,
    status: "Livre",
  },
  {
    id: 3,
    nome: "Carrinho Tablets",
    curso: "Uso Compartilhado",
    professor: "-",
    equipamentos: 36,
    status: "Livre",
  },
  {
    id: 4,
    nome: "Carrinho Chromebook",
    curso: "Uso Exclusivo",
    professor: "Professor Valter",
    equipamentos: 36,
    status: "Livre",
  },
  {
    id: 5,
    nome: "Carrinho Positivo",
    curso: "Uso Exclusivo",
    professor: "Professor Adriano",
    equipamentos: 36,
    status: "Livre",
  },
  {
    id: 6,
    nome: "Carrinho ThinkPad",
    curso: "Uso Compartilhado",
    professor: "-",
    equipamentos: 20,
    status: "Livre",
  },
];

export default function Carrinhos() {

  const navigate = useNavigate();

  const [pesquisa, setPesquisa] = useState("");

  const [mostrarEquipamentos, setMostrarEquipamentos] = useState(false);

  const [carrinhoSelecionado, setCarrinhoSelecionado] = useState("");

  const lista = carrinhos.filter((carrinho) => {

    const texto = pesquisa.toLowerCase();

    return (

      carrinho.nome.toLowerCase().includes(texto) ||

      carrinho.professor.toLowerCase().includes(texto) ||

      carrinho.curso.toLowerCase().includes(texto) ||

      carrinho.status.toLowerCase().includes(texto)

    );

  });

  return (

    <div className="page-content">

<PageTitle
      title="Carrinhos"
      subtitle="Gerencie todos os carrinhos da escola."
      />

      <CarrinhoSummary

      carrinhos={carrinhos}

  />

      <CarrinhoToolbar

pesquisa={pesquisa}

setPesquisa={setPesquisa}

onNovo={()=>{}}

/>

<div className="cart-grid">

{lista.map((carrinho)=>(

      <CarrinhoCard

      key={carrinho.id}

      nome={carrinho.nome}

      curso={carrinho.curso}

      professor={carrinho.professor}

      equipamentos={carrinho.equipamentos}

      status={carrinho.status}

      onReservar={()=>

    navigate(

      "/reservar-carrinho",

{

  state:{

      carrinho:carrinho.nome

}

}

)

}

    onEquipamentos={()=>{

      setCarrinhoSelecionado(carrinho.nome);

      setMostrarEquipamentos(true);

      }}

      />

      ))}

      </div>
      

      {mostrarEquipamentos && (

        <div className="modal">

          <div className="modal-box">

            <h2>{carrinhoSelecionado}</h2>

            <ul>

              {equipamentosCarrinhos[
                carrinhoSelecionado as keyof typeof equipamentosCarrinhos
              ]?.map((equipamento,index)=>(

                <li key={index}>

                  {equipamento}

                </li>

              ))}

            </ul>

            <button
              onClick={()=>setMostrarEquipamentos(false)}
            >
              Fechar
            </button>

          </div>

        </div>

      )}

    </div>

  );

}