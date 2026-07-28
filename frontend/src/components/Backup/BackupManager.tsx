import { exportarBackup } from "../../utils/backup/backup";


export default function BackupManager(){

function importar(
e:React.ChangeEvent<HTMLInputElement>
){

const arquivo=

e.target.files?.[0];

if(!arquivo)return;


}

return(

<div>

<h2>

Backup do Sistema

</h2>

<button
onClick={exportarBackup}
>

Exportar Backup

</button>

<input

type="file"

accept=".json"

onChange={importar}

/>

</div>

);

}