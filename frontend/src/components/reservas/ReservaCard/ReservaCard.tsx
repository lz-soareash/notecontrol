import "./ReservaCard.css";

import Card from "../../common/Card/Card";
import Button from "../../common/Button/Button";
import Badge from "../../common/Badge/Badge";

interface Props{

equipamento:string;

professor:string;

curso:string;

data:string;

hora:string;

status:string;

onCancelar:()=>void;

}

export default function ReservaCard({

equipamento,

professor,

curso,

data,

hora,

status,

onCancelar

}:Props){

return(

<Card>

<div className="reserva-card">

<div className="reserva-top">

<div>

<h2>{equipamento}</h2>

<p>{professor}</p>

</div>

<Badge

text={status}

color={

status==="Ativa"

?"green"

:"yellow"

}

/>

</div>

<div className="reserva-body">

<p>

<b>Curso</b>

{curso}

</p>

<p>

<b>Data</b>

{data}

</p>

<p>

<b>Hora</b>

{hora}

</p>

</div>

<div className="reserva-footer">

<Button

variant="danger"

onClick={onCancelar}

>

Cancelar

</Button>

</div>

</div>

</Card>

);

}