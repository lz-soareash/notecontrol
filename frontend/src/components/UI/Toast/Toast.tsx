import "./Toast.css";

type Props={

mensagem:string;

tipo?:

"success"

|

"warning"

|

"error";

};

export default function Toast({

mensagem,

tipo="success"

}:Props){

return(

<div className={`toast ${tipo}`}>

{mensagem}

</div>

);

}