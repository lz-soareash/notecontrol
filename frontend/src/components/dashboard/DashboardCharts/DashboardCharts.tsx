import "./DashboardCharts.css";

import {

equipamentos

} from "../../../database/equipamentos";

export default function DashboardCharts(){

const disponiveis=

equipamentos.filter(

e=>e.status==="Disponível"

||

e.status==="Livre"

).length;

const uso=

equipamentos.filter(

e=>e.status==="Em uso"

).length;

const manutencao=

equipamentos.filter(

e=>e.status==="Manutenção"

).length;

const total=

disponiveis+

uso+

manutencao;

return(

<div className="dashboard-chart">

<h2>

Status dos Equipamentos

</h2>

<div className="bars">

<div>

<div

className="bar green"

style={{

height:`${(disponiveis/total)*220}px`

}}

>

</div>

<p>

Disponíveis

</p>

<span>

{disponiveis}

</span>

</div>

<div>

<div

className="bar blue"

style={{

height:`${(uso/total)*220}px`

}}

>

</div>

<p>

Em uso

</p>

<span>

{uso}

</span>

</div>

<div>

<div

className="bar yellow"

style={{

height:`${(manutencao/total)*220}px`

}}

>

</div>

<p>

Manutenção

</p>

<span>

{manutencao}

</span>

</div>

</div>

</div>

);

}