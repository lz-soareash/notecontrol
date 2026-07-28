import "./Auditoria.css";

import { logs } from "../../database/logs";

export default function Logs(){

return(

<div>

<h1>

Auditoria

</h1>

<table>

<thead>

<tr>

<th>Usuário</th>

<th>Cargo</th>

<th>Ação</th>

<th>Descrição</th>

<th>Data</th>

<th>Hora</th>

</tr>

</thead>

<tbody>

{logs.map(log=>(

<tr key={log.id}>

<td>{log.usuario}</td>

<td>{log.cargo}</td>

<td>{log.acao}</td>

<td>{log.descricao}</td>

<td>{log.data}</td>

<td>{log.hora}</td>

</tr>

))}

</tbody>

</table>

</div>

);

}