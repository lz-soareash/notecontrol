export interface Reserva {

  id: number;

  professor: string;

  curso: string;

  turma: string;

  carrinho: string;

  retirada: string;

  devolucao: string;

  observacao: string;

  

}

export const reservas: Reserva[] = [];