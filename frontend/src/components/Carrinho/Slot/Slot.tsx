import "./Slot.css";

type Props={

numero:number;

status:

"livre"

|

"reservado"

|

"emprestado"

|

"manutencao"

|

"vazio";

};

export default function Slot({

numero,

status

}:Props){

return(

<button

className={`slot ${status}`}

>

<strong>

{numero}

</strong>

<span>

PM-{String(numero).padStart(3,"0")}

</span>

</button>

);

}