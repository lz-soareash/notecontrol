export interface Cart {
  id: number;
  nome: string;
  tipo: string;
  curso: string;
  quantidade: number;
  exclusivo: boolean;
  professorId?:number;
  status: "Disponível" | "Reservado" | "Em uso";
}

export const carrinhos = [
  {
    id: 1,
    nome: "Carrinho DS 01",
    curso: "3° DS",
    professor: "Professor João",
    equipamentos: 35,
    status: "disponivel",
  },
  {
    id: 2,
    nome: "Carrinho DS 02",
    curso: "2° DS",
    professor: "Professor Maria",
    equipamentos: 35,
    status: "disponivel",
  },
  {
    id: 3,
    nome: "Carrinho Tablets",
    curso: "Compartilhado",
    professor: "-",
    equipamentos: 36,
    status: "disponivel",
  },
  {
    id: 4,
    nome: "Carrinho Chromebook",
    curso: "Uso exclusivo",
    professor: "Professor Guilherme",
    equipamentos: 20,
    status: "disponivel",
  },
  {
    id: 5,
    nome: "Carrinho Positivo",
    curso: "Uso exclusivo",
    professor: "Professor Marcos",
    equipamentos: 18,
    status: "disponivel",
  },
  {
    id: 6,
    nome: "Carrinho ThinkPad",
    curso: "Compartilhado",
    professor: "-",
    equipamentos: 20,
    status: "disponivel",
  },
];