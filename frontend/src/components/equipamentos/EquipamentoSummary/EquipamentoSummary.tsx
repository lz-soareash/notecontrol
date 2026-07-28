import "./EquipamentoSummary.css";

import { Equipamento } from "../../../database/equipamentos";

interface Props{
  equipamentos: Equipamento[];
}

export default function EquipamentoSummary({
  equipamentos
}: Props){

  const notebooks =
    equipamentos.filter(e => e.tipo === "Notebook").length;

  const tablets =
    equipamentos.filter(e => e.tipo === "Tablet").length;

  const disponiveis =
    equipamentos.filter(e => e.status === "Disponível").length;

  const manutencao =
    equipamentos.filter(e => e.status === "Manutenção").length;

  const cards = [
    {
      titulo:"Notebooks",
      valor:notebooks,
      icone:"💻"
    },
    {
      titulo:"Tablets",
      valor:tablets,
      icone:"📱"
    },
    {
      titulo:"Disponíveis",
      valor:disponiveis,
      icone:"🟢"
    },
    {
      titulo:"Manutenção",
      valor:manutencao,
      icone:"🟡"
    }
  ];

  return(

    <section className="equip-summary">

      {cards.map(card=>(

        <div
          key={card.titulo}
          className="equip-summary-card"
        >

          <div>

            <h4>{card.titulo}</h4>

            <h1>{card.valor}</h1>

          </div>

          <span>{card.icone}</span>

        </div>

      ))}

    </section>

  );

}