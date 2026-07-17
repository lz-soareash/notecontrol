
import { useState } from "react";
import "./equipamentos.css";
import EquipmentDrawer from "../../../components/EquipmentDrawer/EquipmentDrawer";

const equipamentos = [
  {
    id: 1,
    patrimonio: "NB-001",
    nome: "Notebook Dell Latitude",
    tipo: "Notebook",
    marca: "Dell",
    status: "Ativo",
    carrinho: 1,
    slot: 1,
  },
  {
    id: 2,
    patrimonio: "NB-002",
    nome: "Notebook Dell Latitude",
    tipo: "Notebook",
    marca: "Dell",
    status: "Em manutenção",
    carrinho: 1,
    slot: 2,
  },
  {
    id: 3,
    patrimonio: "NB-003",
    nome: "Notebook Dell Latitude",
    tipo: "Notebook",
    marca: "Dell",
    status: "Ativo",
    carrinho: 1,
    slot: 3,
  },
  {
    id: 4,
    patrimonio: "NB-013",
    nome: "Slot quebrado",
    tipo: "Notebook",
    marca: "Dell",
    status: "Inativo",
    carrinho: 1,
    slot: 13,
  },
  {
    id: 5,
    patrimonio: "NB-019",
    nome: "Slot quebrado",
    tipo: "Notebook",
    marca: "Dell",
    status: "Inativo",
    carrinho: 1,
    slot: 19,
  },
  {
    id: 6,
    patrimonio: "TAB-001",
    nome: "Tablet Samsung",
    tipo: "Tablet",
    marca: "Samsung",
    status: "Ativo",
    carrinho: "-",
    slot: "-",
  },
];

export default function Equipamentos() {
  const [selected, setSelected] = useState<any>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <EquipmentDrawer open={open} equipamento={selected} onClose={() => setOpen(false)} />

      <div className="equipamentos-page">

        <div className="equipamentos-header">

          <div>
            <h1>Equipamentos</h1>
            <p>Gerencie notebooks, tablets e demais equipamentos.</p>
          </div>

          <button className="novo-btn">+ Novo Equipamento</button>

        </div>

        <div className="filtros">

          <input type="text" placeholder="Pesquisar patrimônio ou nome..." />

          <select>
            <option>Todos os tipos</option>
            <option>Notebook</option>
            <option>Tablet</option>
          </select>

          <select>
            <option>Todos os status</option>
            <option>Ativo</option>
            <option>Reservado</option>
            <option>Em manutenção</option>
            <option>Inativo</option>
          </select>

        </div>

        <table>
          <thead>
            <tr>
              <th>Patrimônio</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Carrinho</th>
              <th>Slot</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {equipamentos.map((eq) => (
              <tr
                key={eq.id}
                onClick={() => {
                  setSelected(eq);
                  setOpen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <td>{eq.patrimonio}</td>
                <td>{eq.nome}</td>
                <td>{eq.tipo}</td>
                <td>{eq.carrinho}</td>
                <td>{eq.slot}</td>
                <td>
                  <span className={`status ${eq.status.toLowerCase().replace(/\s+/g, "-")}`}>
                    {eq.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  );
}