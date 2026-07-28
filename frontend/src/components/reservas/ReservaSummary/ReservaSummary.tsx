import "./ReservaSummary.css";

import Card from "../../common/Card/Card";

interface Props{

ativas:number;

hoje:number;

finalizadas:number;

}

export default function ReservaSummary({

ativas,

hoje,

finalizadas

}:Props){

return(

<div className="reserva-summary">

<Card>

<h3>Ativas</h3>

<h1>{ativas}</h1>

</Card>

<Card>

<h3>Hoje</h3>

<h1>{hoje}</h1>

</Card>

<Card>

<h3>Finalizadas</h3>

<h1>{finalizadas}</h1>

</Card>

</div>

);

}