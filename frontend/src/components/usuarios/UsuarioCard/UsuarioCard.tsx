import "./UsuarioCard.css";

import Card from "../../common/Card/Card";
import Button from "../../common/Button/Button";
import Badge from "../../common/Badge/Badge";

interface Props{

nome:string;

email:string;

cargo:string;

status:string;

onEditar:()=>void;

onExcluir:()=>void;

}

export default function UsuarioCard({

nome,

email,

cargo,

status,

onEditar,

onExcluir

}:Props){

return(

<Card>

<div className="usuario-card">

<div className="usuario-header">

<div>

<h2>{nome}</h2>

<p>{email}</p>

</div>


<Badge

text={status}

color={status==="Ativo"?"green":"red"}

/>

</div>


<div className="usuario-info">

<p>

<b>Cargo</b>

{cargo}

</p>

</div>


<div className="usuario-actions">


<Button

variant="success"

onClick={onEditar}

>

Editar

</Button>


<Button

variant="danger"

onClick={onExcluir}

>

Excluir

</Button>


</div>


</div>

</Card>

);

}