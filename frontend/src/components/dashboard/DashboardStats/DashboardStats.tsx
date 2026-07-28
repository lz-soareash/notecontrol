import "./DashboardStats.css";

import {

equipamentos

}

from "../../../database/equipamentos";

import {

carrinhos

}

from "../../../database/carrinhos";

import {

reservas

}

from "../../../database/reservas";

export default function DashboardStats(){

const notebooks=

equipamentos.filter(

e=>e.tipo==="Notebook"

).length;

const tablets=

equipamentos.filter(

e=>e.tipo==="Tablet"

).length;

const disponiveis=

equipamentos.filter(

e=>

e.status==="Disponível"

||

e.status==="Livre"

).length;

const manutencao=

equipamentos.filter(

e=>

e.status==="Manutenção"

).length;

const cards=[

{

titulo:"Notebooks",

valor:notebooks,

icone:"💻"

},

{

titulo:"Tablets",

valor:tablets,

icone:"📱"

},

{

titulo:"Carrinhos",

valor:carrinhos.length,

icone:"🛒"

},

{

titulo:"Reservas",

valor:reservas.length,

icone:"📅"

},

{

titulo:"Disponíveis",

valor:disponiveis,

icone:"🟢"

},

{

titulo:"Manutenção",

valor:manutencao,

icone:"🟡"

}

];

return(

<section className="dashboard-stats">

{

cards.map(

(card)=>(

<div

className="stat-card"

key={card.titulo}

>

<div className="stat-icon">

{card.icone}

</div>

<div>

<h3>

{card.titulo}

</h3>

<h1>

{card.valor}

</h1>

</div>

</div>

)

)

}

</section>

);

}