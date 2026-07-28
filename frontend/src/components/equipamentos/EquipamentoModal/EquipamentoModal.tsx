import "./EquipamentoModal.css";

import EquipamentoInfo

from "../EquipamentoInfo/EquipamentoInfo";

import EquipamentoActions

from "../EquipamentoActions/EquipamentoActions";

type Props={

aberto:boolean;

fechar:()=>void;

equipamento:string;

};

export default function EquipamentoModal({

aberto,

fechar,

equipamento

}:Props){

if(!aberto){

return null;

}

return(

<div

className="equipamento-overlay"

>

<div

className="equipamento-modal"

>

<h2>

{equipamento}

</h2>

<EquipamentoInfo

titulo="Patrimônio"

valor="A definir"

/>

<EquipamentoInfo

titulo="Número de Série"

valor="A definir"

/>

<EquipamentoInfo

titulo="Aluno"

valor="Não vinculado"

/>

<EquipamentoInfo

titulo="Professor"

valor="-"

/>

<EquipamentoInfo

titulo="Status"

valor="Disponível"

/>

<EquipamentoActions/>

<button

className="fechar"

onClick={fechar}

>

Fechar

</button>

</div>

</div>

);

}