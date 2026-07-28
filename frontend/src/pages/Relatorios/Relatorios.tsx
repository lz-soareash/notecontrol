import "./Relatorios.css";

import { equipamentos } from "../../database/equipamentos";
import { carrinhos } from "../../database/carrinhos";
import { reservas } from "../../database/reservas";
import { usuarioLogado } from "../../database/usuarios";

import { gerarPdf } from "../../utils/pdf/gerarPdf";
import { gerarExcel } from "../../utils/excel/gerarExcel";

export default function Relatorios() {

  function exportarEquipamentosPDF() {

    gerarPdf(

      "Relatório de Equipamentos",

      [

        { header: "Patrimônio", dataKey: "patrimonio" },
        { header: "Nome", dataKey: "nome" },
        { header: "Tipo", dataKey: "tipo" },
        { header: "Professor", dataKey: "professor" },
        { header: "Status", dataKey: "status" }

      ],

      equipamentos,

      usuarioLogado?.nome || "Sistema"

    );

  }

  function exportarEquipamentosExcel() {

    gerarExcel(

      equipamentos,

      "Equipamentos"

    );

  }

  function exportarCarrinhosPDF() {

    gerarPdf(

      "Relatório de Carrinhos",

      [

        { header: "Nome", dataKey: "nome" },
        { header: "Curso", dataKey: "curso" },
        { header: "Professor", dataKey: "professor" },
        { header: "Equipamentos", dataKey: "equipamentos" },
        { header: "Status", dataKey: "status" }

      ],

      carrinhos,

      usuarioLogado?.nome || "Sistema"

    );

  }

  function exportarCarrinhosExcel() {

    gerarExcel(

      carrinhos,

      "Carrinhos"

    );

  }

  function exportarReservasPDF() {

    gerarPdf(

      "Relatório de Reservas",

      [

        { header: "Professor", dataKey: "professor" },
        { header: "Curso", dataKey: "curso" },
        { header: "Turma", dataKey: "turma" },
        { header: "Carrinho", dataKey: "carrinho" },
        { header: "Retirada", dataKey: "retirada" },
        { header: "Devolução", dataKey: "devolucao" }

      ],

      reservas,

      usuarioLogado?.nome || "Sistema"

    );

  }

  function exportarReservasExcel() {

    gerarExcel(

      reservas,

      "Reservas"

    );

  }

  return (

    <div className="relatorios-page">

      <div className="relatorios-header">

        <div>

          <h1>Central de Relatórios</h1>

          <p>
            Exporte informações completas do sistema.
          </p>

        </div>

      </div>

      <div className="relatorios-grid">

        <div className="relatorio-card">

          <h2>📦 Equipamentos</h2>

          <p>
            Exporta todos os equipamentos cadastrados.
          </p>

          <div className="buttons">

            <button
              onClick={exportarEquipamentosPDF}
            >
              PDF
            </button>

            <button
              onClick={exportarEquipamentosExcel}
            >
              Excel
            </button>

          </div>

        </div>

        <div className="relatorio-card">

          <h2>🛒 Carrinhos</h2>

          <p>
            Exporta todos os carrinhos.
          </p>

          <div className="buttons">

            <button
              onClick={exportarCarrinhosPDF}
            >
              PDF
            </button>

            <button
              onClick={exportarCarrinhosExcel}
            >
              Excel
            </button>

          </div>

        </div>

        <div className="relatorio-card">

          <h2>📅 Reservas</h2>

          <p>
            Exporta todas as reservas.
          </p>

          <div className="buttons">

            <button
              onClick={exportarReservasPDF}
            >
              PDF
            </button>

            <button
              onClick={exportarReservasExcel}
            >
              Excel
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}