import "./DashboardRecent.css";

import {

equipamentos

}

from "../../../database/equipamentos";

export default function DashboardRecent(){

const recentes=

equipamentos.slice(

0,

5

);

return(

<section className="recent">

<h2>

Equipamentos Recentes

</h2>

<table>

<thead>

<tr>

<th>

Nome

</th>

<th>

Professor

</th>

<th>

Status

</th>

</tr>

</thead>

<tbody>

{

recentes.map(

equipamento=>(

<tr

key={equipamento.id}

>

<td>

{equipamento.nome}

</td>

<td>

{equipamento.professor}

</td>

<td>

{equipamento.status}

</td>

</tr>

)

)

}

</tbody>

</table>

</section>

);

}