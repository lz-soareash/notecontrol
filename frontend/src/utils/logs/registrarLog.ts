import { logs } from "../../database/logs";
import { usuarioLogado } from "../../database/usuarios";

export function registrarLog(

acao:string,

descricao:string

){

const agora=new Date();

logs.unshift({

id:Date.now(),

usuario:usuarioLogado?.nome || "Sistema",

cargo:usuarioLogado?.cargo || "-",

acao,

descricao,

data:agora.toLocaleDateString(),

hora:agora.toLocaleTimeString(),

});

}