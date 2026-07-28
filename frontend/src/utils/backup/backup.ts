import { equipamentos } from "../../database/equipamentos";
import { carrinhos } from "../../database/carrinhos";
import { reservas } from "../../database/reservas";
import { usuarios } from "../../database/usuarios";
import { professores } from "../../database/professores";
import { cursos } from "../../database/cursos";
import { turmas } from "../../database/turmas";
import { registrarLog } from "../logs/registrarLog";

export function exportarBackup(){

const backup={

equipamentos,

carrinhos,

reservas,

usuarios,

professores,

cursos,

turmas,

};

const json=

JSON.stringify(

backup,

null,

2

);

const blob=

new Blob(

[json],

{

type:"application/json"

}

);

const url=

URL.createObjectURL(blob);

const a=

document.createElement("a");

a.href=url;

registrarLog(

"Backup",

"Exportou um Backup do sistema."

);

a.download=

`NoteControl_Backup_${
new Date()
.toLocaleDateString("pt-BR")
.replace(/\//g,"-")
}.json`;

a.click();

URL.revokeObjectURL(url);

}