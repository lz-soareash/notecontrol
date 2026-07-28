import "./CarrinhoHeader.css";

type Props={

titulo:string;

descricao:string;

};

export default function CarrinhoHeader({

titulo,

descricao

}:Props){

return(

<div className="carrinho-header">

<div>

<h2>{titulo}</h2>

<p>{descricao}</p>

</div>

</div>

);

}