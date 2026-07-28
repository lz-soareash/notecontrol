import { Permissao } from "../types/Permissao";

export interface Usuario{

id:number;

nome:string;

email:string;

cargo:string;

permissao:Permissao;

ativo:boolean;

}