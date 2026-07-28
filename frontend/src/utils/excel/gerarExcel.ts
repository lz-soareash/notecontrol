import * as XLSX from "xlsx";

export function gerarExcel(
  dados: any[],
  nomeArquivo: string
){

  const planilha =
    XLSX.utils.json_to_sheet(dados);

  const livro =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    livro,
    planilha,
    "Relatório"
  );

  XLSX.writeFile(
    livro,
    `${nomeArquivo}.xlsx`
  );

}