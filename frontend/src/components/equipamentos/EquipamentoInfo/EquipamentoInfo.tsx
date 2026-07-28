import "./EquipamentoInfo.css";
import { Equipamento } from "../../../database/equipamentos";

interface Props{

equipamento:Equipamento;

}

export default function EquipamentoInfo({

equipamento

}:Props){

const infos=[

["Modelo",equipamento.modelo],

["Patrimônio",equipamento.patrimonio],

["Nº Série",equipamento.numeroSerie],

["Professor",equipamento.professor],

["Curso",equipamento.curso],

["Carrinho",equipamento.carrinho],

["Sala",equipamento.sala],

["Última atualização",equipamento.ultimaAtualizacao]

];

return(

<div className="equip-info-grid">

{

infos.map(

([titulo,valor])=>(

<div

className="equip-info-item"

key={titulo}

>

<span>

{titulo}

</span>

<strong>

{valor||"-"}

</strong>

</div>

)

)

}

</div>

);

}