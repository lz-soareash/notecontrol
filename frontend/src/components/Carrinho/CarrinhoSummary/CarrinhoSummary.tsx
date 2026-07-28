import "./CarrinhoSummary.css";
import Card from "../../common/Card/Card";

interface Carrinho{
id:number;
status:string;
}

interface Props{
carrinhos:Carrinho[];
}

export default function CarrinhoSummary({carrinhos}:Props){

const total=carrinhos.length;

const livres=carrinhos.filter(
c=>c.status==="Livre"
).length;

const reservados=carrinhos.filter(
c=>c.status==="Reservado"
).length;

return(

<div className="carrinho-summary">

<Card>

<h3>Total</h3>

<h1>{total}</h1>

</Card>

<Card>

<h3>Livres</h3>

<h1>{livres}</h1>

</Card>

<Card>

<h3>Reservados</h3>

<h1>{reservados}</h1>

</Card>

</div>

);

}