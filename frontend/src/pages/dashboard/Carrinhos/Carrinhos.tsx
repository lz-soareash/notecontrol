import "./Carrinhos.css";

interface Slot {
  slot: number;
  notebook: string | null;
  status: string;
}

interface Carrinho {
  id: number;
  nome: string;
  slots: Slot[];
}

const carrinhos: Carrinho[] = [
  {
    id: 1,
    nome: "Carrinho 01",
    slots: [
      { slot: 1, notebook: "NB-001", status: "ativo" },
      { slot: 2, notebook: "NB-002", status: "ativo" },
      { slot: 3, notebook: "NB-003", status: "ativo" },
      { slot: 4, notebook: "NB-004", status: "ativo" },
      { slot: 5, notebook: "NB-005", status: "ativo" },
      { slot: 6, notebook: "NB-006", status: "ativo" },
      { slot: 7, notebook: "NB-007", status: "ativo" },
      { slot: 8, notebook: "NB-008", status: "ativo" },
      { slot: 9, notebook: "NB-009", status: "ativo" },
      { slot: 10, notebook: "NB-010", status: "ativo" },
      { slot: 11, notebook: "NB-011", status: "ativo" },
      { slot: 12, notebook: "NB-012", status: "ativo" },
      { slot: 13, notebook: "NULL", status: "vazio" },
      { slot: 14, notebook: "NB-014", status: "ativo" },
      { slot: 15, notebook: "NB-015", status: "ativo" },
      { slot: 16, notebook: "NB-016", status: "ativo" },
      { slot: 17, notebook: "NB-017", status: "ativo" },
      { slot: 18, notebook: "NB-018", status: "ativo" },
      { slot: 19, notebook: null, status: "vazio" },
      { slot: 20, notebook: "NB-020", status: "ativo" },
      { slot: 21, notebook: "NB-021", status: "ativo" },
      { slot: 22, notebook: "NB-022", status: "ativo" },
      { slot: 23, notebook: "NB-023", status: "ativo" },
      { slot: 24, notebook: "NB-024", status: "ativo" },
      { slot: 25, notebook: "NB-025", status: "ativo" },
      { slot: 26, notebook: "NB-026", status: "ativo" },
      { slot: 27, notebook: "NB-027", status: "ativo" },
      { slot: 28, notebook: "NB-028", status: "ativo" },
      { slot: 29, notebook: "NB-029", status: "ativo" },
      { slot: 30, notebook: "NB-030", status: "ativo" },
      { slot: 31, notebook: "NB-031", status: "ativo" },
      { slot: 32, notebook: "NB-032", status: "ativo" },
      { slot: 33, notebook: "NB-033", status: "ativo" },
      { slot: 34, notebook: "NB-034", status: "ativo" },
      { slot: 35, notebook: "NB-035", status: "ativo" },
      { slot: 36, notebook: "NB-036", status: "ativo" },
    ],
  },
];

export default function Carrinhos() {
  return (
    <main className="carrinhos-page">
      <div className="header">
        <div>
          <h1>Carrinhos</h1>
          <p>Gerencie todos os carrinhos da escola.</p>
        </div>

        <button className="novo">+ Novo Carrinho</button>
      </div>

      <div className="grid">
        {carrinhos.map((carrinho) => {
          const capacidade = carrinho.slots.length;
          const notebooksAtivos = carrinho.slots.filter(
            (slot) => slot.notebook && slot.status === "ativo"
          ).length;
          const status = notebooksAtivos === capacidade ? "Completo" : "Com vagas";

          return (
            <div key={carrinho.id} className="cart-card">
              <h2>{carrinho.nome}</h2>
              <p>
                {notebooksAtivos} / {capacidade} notebooks ativos
              </p>
              <span>{status}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
