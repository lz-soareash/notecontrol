export enum StatusEquipamento {
  DISPONIVEL = "Disponível",
  EM_USO = "Em uso",
  MANUTENCAO = "Manutenção",
  RESERVADO = "Reservado",
}

export interface Equipamento {
  id: number;

  nome: string;

  tipo: string;

  fabricante: string;

  modelo: string;

  ano: number;

  patrimonio: string;

  numeroSerie: string;

  carrinho: string;

  slot: number;

  professor: string;

  curso: string;

  sala: string;

  status: StatusEquipamento;

  ultimaAtualizacao: string;

  observacoes: string;
}

export const equipamentos: Equipamento[] = [

{
id:1,

nome:"Notebook Positivo 01",

tipo:"Notebook",

fabricante:"Positivo",

modelo:"A definir",

ano:2025,

patrimonio:"A definir",

numeroSerie:"A definir",

carrinho:"Carrinho DS 01",

slot:1,

professor:"Professor Rafael Piva",

curso:"3º DS",

sala:"Lab 02",

status:StatusEquipamento.EM_USO,

ultimaAtualizacao:"20/07/2026",

observacoes:""

},

{
id:2,

nome:"Notebook Positivo 02",

tipo:"Notebook",

fabricante:"Positivo",

modelo:"A definir",

ano:2025,

patrimonio:"A definir",

numeroSerie:"A definir",

carrinho:"Carrinho DS 02",

slot:2,

professor:"Professor Rafael Piva",

curso:"2º DS",

sala:"Lab 01",

status:StatusEquipamento.DISPONIVEL,

ultimaAtualizacao:"20/07/2026",

observacoes:""

},

{
id:3,

nome:"Tablet Samsung",

tipo:"Tablet",

fabricante:"Samsung",

modelo:"Galaxy Tab",

ano:2022,

patrimonio:"A definir",

numeroSerie:"A definir",

carrinho:"Carrinho Tablets",

slot:1,

professor:"-",

curso:"-",

sala:"-",

status:StatusEquipamento.DISPONIVEL,

ultimaAtualizacao:"18/07/2026",

observacoes:""

},

{
id:4,

nome:"Chromebook Google",

tipo:"Chromebook",

fabricante:"Google",

modelo:"Chromebook",

ano:2022,

patrimonio:"A definir",

numeroSerie:"A definir",

carrinho:"Carrinho Chromebook",

slot:1,

professor:"Professor Valter",

curso:"-",

sala:"Biblioteca",

status:StatusEquipamento.DISPONIVEL,

ultimaAtualizacao:"19/07/2026",

observacoes:""

},

{
id:5,

nome:"Notebook Positivo",

tipo:"Notebook",

fabricante:"Positivo",

modelo:"Positivo Antigo",

ano:2024,

patrimonio:"A definir",

numeroSerie:"A definir",

carrinho:"Carrinho Positivo",

slot:1,

professor:"Professor Adriano",

curso:"-",

sala:"Sala 2",

status:StatusEquipamento.DISPONIVEL,

ultimaAtualizacao:"20/07/2026",

observacoes:""

},

{
id:6,

nome:"Notebook ThinkPad",

tipo:"Notebook",

fabricante:"Lenovo",

modelo:"ThinkPad",

ano:0,

patrimonio:"TP-001",

numeroSerie:"LEN9988",

carrinho:"Carrinho ThinkPad",

slot:1,

professor:"-",

curso:"-",

sala:"-",

status:StatusEquipamento.DISPONIVEL,

ultimaAtualizacao:"20/07/2026",

observacoes:""

}

];