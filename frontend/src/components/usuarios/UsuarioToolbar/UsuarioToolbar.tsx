import "./UsuarioToolbar.css";

import SearchBar from "../../common/SearchBar/SearchBar";

import Button from "../../common/Button/Button";


interface Props{

pesquisa:string;

setPesquisa:(v:string)=>void;

onNovo:()=>void;

}


export default function UsuarioToolbar({

pesquisa,

setPesquisa,

onNovo

}:Props){


return(

<div className="usuario-toolbar">


<SearchBar

value={pesquisa}

onChange={setPesquisa}

placeholder="Pesquisar usuário..."

 />


<Button

onClick={onNovo}

>

Novo Usuário

</Button>


</div>

);

}