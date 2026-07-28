import "./CarrinhoResumo.css";

type Props={

total:number;

livres:number;

reservados:number;

manutencao:number;

};

export default function CarrinhoResumo({

total,

livres,

reservados,

manutencao

}:Props){

return(

<div className="resumo-carrinho">

<div>

<h3>{total}</h3>

<span>Total</span>

</div>

<div>

<h3>{livres}</h3>

<span>Livres</span>

</div>

<div>

<h3>{reservados}</h3>

<span>Reservados</span>

</div>

<div>

<h3>{manutencao}</h3>

<span>Manutenção</span>

</div>

</div>

);

}