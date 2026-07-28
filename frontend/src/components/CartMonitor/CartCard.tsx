import "./CartCard.css";

type Props = {

    nome:string;

    curso:string;

    total:number;

    disponiveis:number;

    uso:number;

    manutencao:number;

};

export default function CartCard({

nome,

curso,

total,

disponiveis,

uso,

manutencao

}:Props){

return(

<div className="cart-card">

<h2>{nome}</h2>

<p>{curso}</p>

<hr/>

<div className="numbers">

<p>Total: <strong>{total}</strong></p>

<p className="green">

Disponíveis: {disponiveis}

</p>

<p className="yellow">

Em uso: {uso}

</p>

<p className="red">

Manutenção: {manutencao}

</p>

</div>

<button>

Abrir Carrinho

</button>

</div>

);

}