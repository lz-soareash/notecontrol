export const equipamentosCarrinhos = {

  "Carrinho DS 2º Ano": Array.from(
    { length: 36 },
    (_, i) => `Notebook Positivo ${String(i + 1).padStart(2, "0")}`
  ),

  "Carrinho DS/CD 3º Ano": Array.from(
    { length: 36 },
    (_, i) => `Notebook Dell ${String(i + 36).padStart(2, "0")}`
  ),

  "Carrinho Tablets": Array.from(
    { length: 36 },
    (_, i) => `Tablet Samsung ${String(i + 1).padStart(2, "0")}`
  ),

  "Carrinho Chromebook": Array.from(
    { length: 36 },
    (_, i) => `Chromebook Google ${String(i + 1).padStart(2, "0")}`
  ),

  "Carrinho Positivo": Array.from(
    { length: 36 },
    (_, i) => `Desktop Positivo Antigo ${String(i + 1).padStart(2, "0")}`
  ),

  "Carrinho ThinkPad": Array.from(
    { length: 20 },
    (_, i) => `Notebook ThinkPad ${String(i + 1).padStart(2, "0")}`
  ),

};