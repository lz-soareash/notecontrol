import "./EquipamentoCard.css";

import Button from "../../common/Button/Button";
import Badge from "../../common/Badge/Badge";
import Card from "../../common/Card/Card";
import EquipamentoInfo from "../EquipamentoInfo/EquipamentoInfo";

import { Equipamento } from "../../../database/equipamentos";

type Props = {

equipamento: Equipamento;

onVisualizar: ()=>void;

onEditar: ()=>void;

onExcluir: ()=>void;

};

export default function EquipamentoCard({

equipamento,

onVisualizar,

onEditar,

onExcluir

}:Props){

function corStatus(){

switch(equipamento.status){

case "Disponível":

return "green";

case "Em uso":

return "blue";

case "Manutenção":

return "yellow";

default:

return "red";

}

}

return(

<Card>

<div className="equip-card">

<div className="equip-header">

<div>

<h2>

💻 {equipamento.nome}

</h2>

<p>

{equipamento.modelo}

</p>

</div>

<Badge

text={equipamento.status}

color={corStatus() as any}

/>

</div>

<EquipamentoInfo

equipamento={equipamento}

/>

<div className="equip-buttons">

<Button

variant="secondary"

onClick={onVisualizar}

>

Visualizar

</Button>

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