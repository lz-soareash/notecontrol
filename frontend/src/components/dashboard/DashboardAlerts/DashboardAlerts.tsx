import "./DashboardAlerts.css";

import {

equipamentos

}

from "../../../database/equipamentos";

export default function DashboardAlerts(){

const manutencao=

equipamentos.filter(

e=>e.status==="Manutenção"

);

return(

<section className="alerts">

<h2>

Avisos

</h2>

{

manutencao.length===0?

(

<p>

Nenhum equipamento em manutenção.

</p>

)

:

manutencao.map(

equipamento=>(

<div

className="alert"

key={equipamento.id}

>

⚠️

{equipamento.nome}

está em manutenção.

</div>

)

)

}

</section>

);

}