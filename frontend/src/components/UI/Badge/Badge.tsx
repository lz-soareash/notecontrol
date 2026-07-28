import "./Badge.css";

type Props={

texto:string;

tipo?:

"success"

|

"warning"

|

"danger";

};

export default function Badge({

texto,

tipo="success"

}:Props){

return(

<span className={`badge ${tipo}`}>

{texto}

</span>

);

}