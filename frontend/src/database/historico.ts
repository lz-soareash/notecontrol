export interface Historico{

id:number;

professor:string;

equipamento:string;

entrada:string;

saida:string;

status:string;

}

export const historico:Historico[]=[

{

id:1,

professor:"Professor Exemplo",

equipamento:"Carrinho DS 2º",

entrada:"07:00",

saida:"11:30",

status:"Concluído"

}

];