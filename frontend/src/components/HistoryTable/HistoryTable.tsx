import "./HistoryTable.css";

import { historico } from "../../database/historico";

export default function HistoryTable(){

return(

<table className="history">

<thead>

<tr>

<th>Professor</th>

<th>Equipamento</th>

<th>Entrada</th>

<th>Saída</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{historico.map(item=>(

<tr key={item.id}>

<td>{item.professor}</td>

<td>{item.equipamento}</td>

<td>{item.entrada}</td>

<td>{item.saida}</td>

<td>{item.status}</td>

</tr>

))}

</tbody>

</table>

);

}