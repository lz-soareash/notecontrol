import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type Coluna = {
  header: string;
  dataKey: string;
};

export function gerarPdf(
  titulo: string,
  colunas: Coluna[],
  dados: any[],
  usuario: string
) {

  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("NoteControl", 14, 18);

  doc.setFontSize(15);
  doc.text(titulo, 14, 30);

  doc.setFontSize(10);

  doc.text(
    `Gerado por: ${usuario}`,
    14,
    38
  );

  doc.text(
    `Data: ${new Date().toLocaleString()}`,
    14,
    44
  );

  autoTable(doc, {
    head: [colunas.map(c => c.header)],
    body: dados.map(item =>
      colunas.map(c => item[c.dataKey] ?? "")
    ),
    startY: 52,
    theme: "grid",
    headStyles: {
      fillColor: [37, 99, 235],
    },
    styles: {
      fontSize: 9,
    },
  });

  doc.save(`${titulo}.pdf`);

}