import "./CarrinhoGrid.css";

import SlotNotebook

from "../SlotNotebook/SlotNotebook";

export default function CarrinhoGrid(){

const slots=

Array.from(

{

length:36

},

(_,i)=>i+1

);

return(

<div className="grid-carrinho">

{

slots.map(slot=>(

<SlotNotebook

key={slot}

slot={slot}

codigo={`PM-${

String(slot)

.padStart(3,"0")

}`}

status="livre"

/>

))

}

</div>

);

}