import "./CarrinhoVisual.css";

import Slot from "../Slot/Slot";

export default function CarrinhoVisual(){

const primeira=Array.from({length:12},(_,i)=>i+1);

const segunda=Array.from({length:12},(_,i)=>i+13);

const terceira=Array.from({length:12},(_,i)=>i+25);

return(

<div className="visual-carrinho">

<div className="coluna">

{

primeira.map(numero=>(

<Slot

key={numero}

numero={numero}

status="livre"

/>

))

}

</div>

<div className="coluna">

{

segunda.map(numero=>(

<Slot

key={numero}

numero={numero}

status="livre"

/>

))

}

</div>

<div className="coluna">

{

terceira.map(numero=>(

<Slot

key={numero}

numero={numero}

status="livre"

/>

))

}

</div>

</div>

);

}