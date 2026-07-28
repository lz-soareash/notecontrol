import "./CarrinhoCard.css";

import Card from "../../common/Card/Card";
import Button from "../../common/Button/Button";

interface Props{

nome:string;

curso:string;

professor:string;

equipamentos:number;

status:string;

onReservar:()=>void;

onEquipamentos:()=>void;

}

export default function CarrinhoCard({

nome,

curso,

professor,

equipamentos,

status,

onReservar,

onEquipamentos

}:Props){

return(

<Card>

<div className="carrinho-card">

<h2>{nome}</h2>

<p>{curso}</p>

<hr/>

<p>

<b>Professor</b>

{professor}

</p>

<p>

<b>Equipamentos</b>

{equipamentos}

</p>

<p>

<b>Status</b>

{status}

</p>

<div className="carrinho-buttons">

<Button

onClick={onReservar}

>

Reservar

</Button>

<Button

variant="secondary"

onClick={onEquipamentos}

>

Equipamentos

</Button>

</div>

</div>

</Card>

);

}