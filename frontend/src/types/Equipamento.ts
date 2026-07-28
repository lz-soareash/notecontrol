import { StatusEquipamento } from "../constants/status";

export interface Equipamento {

  id: number;

  patrimonio: string;

  numeroSerie: string;

  tipo: string;

  modelo: string;

  carrinho: string;

  professor: string;

  curso: string;

  sala: string;

  status: StatusEquipamento;

  ultimaAtualizacao: string;

}