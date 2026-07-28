import { equipamentos } from "../database/equipamentos";

export class EquipamentoService {

  static listar() {
    return equipamentos;
  }

  static buscarPorId(id: number) {
    return equipamentos.find(
      (equipamento) => equipamento.id === id
    );
  }

  static buscarPorPatrimonio(patrimonio: string) {
    return equipamentos.find(
      (equipamento) => equipamento.patrimonio === patrimonio
    );
  }

  static listarDisponiveis() {
    return equipamentos.filter(
      (equipamento) =>
        equipamento.status === "Disponível" ||
        equipamento.status === "Livre"
    );
  }

  static listarEmUso() {
    return equipamentos.filter(
      (equipamento) =>
        equipamento.status === "Em uso"
    );
  }

}