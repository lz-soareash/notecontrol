import "./Professores.css";

const professores = [
  {
    nome: "Professor João",
    disciplina: "Desenvolvimento de Sistemas"
  },
  {
    nome: "Professor Maria",
    disciplina: "Ciência de Dados"
  },
  {
    nome: "Professor Carlos",
    disciplina: "Farmácia"
  }
];

export default function Professores() {
  return (
    <div className="page">

      <div className="page-header">
        <h1>Professores</h1>

        <button className="primary">
          Novo Professor
        </button>
      </div>

      <table className="table">

        <thead>
          <tr>
            <th>Professor</th>
            <th>Disciplina</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>

          {professores.map((professor, index) => (

            <tr key={index}>

              <td>{professor.nome}</td>

              <td>{professor.disciplina}</td>

              <td>

                <button>Editar</button>

                <button>Excluir</button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}