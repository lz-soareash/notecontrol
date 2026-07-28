import "./EquipamentoFilters.css";

type Props={

pesquisa:string;

setPesquisa:(

texto:string

)=>void;

}

export default function EquipamentoFilters({

pesquisa,

setPesquisa

}:Props){

return(

<section

className="equip-filters"

>

<input

placeholder="Pesquisar equipamento..."

value={pesquisa}

onChange={

e=>

setPesquisa(

e.target.value

)

}

/>

</section>

);

}