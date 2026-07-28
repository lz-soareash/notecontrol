export const STATUS = {

  LIVRE: "Livre",

  DISPONIVEL: "Disponível",

  EM_USO: "Em uso",

  RESERVADO: "Reservado",

  MANUTENCAO: "Manutenção"

} as const;

export type StatusEquipamento =
  typeof STATUS[keyof typeof STATUS];