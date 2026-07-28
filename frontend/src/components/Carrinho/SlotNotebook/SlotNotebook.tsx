import "./SlotNotebook.css";

type Status=

"livre"

|

"reservado"

|

"emprestado"

|

"manutencao"

|

"vazio";

type Props={

slot:number;

codigo?:string;

status:Status;

};

export default function SlotNotebook({

slot,

codigo,

status

}:Props){

return(

<button

className={`slot ${status}`}

>

<strong>

{slot}

</strong>

<small>

{

codigo??

"Vazio"

}

</small>

</button>

);

}