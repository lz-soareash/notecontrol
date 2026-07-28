import "./CarrinhoToolbar.css";

import SearchBar from "../../common/SearchBar/SearchBar";
import Button from "../../common/Button/Button";

interface Props{

pesquisa:string;

setPesquisa:(v:string)=>void;

onNovo:()=>void;

}

export default function CarrinhoToolbar({

pesquisa,

setPesquisa,

onNovo

}:Props){

return(

<div className="carrinho-toolbar">

<SearchBar

value={pesquisa}

onChange={setPesquisa}

placeholder="Pesquisar carrinho..."

/>

<Button

onClick={onNovo}

>

Novo Carrinho

</Button>

</div>

);

}