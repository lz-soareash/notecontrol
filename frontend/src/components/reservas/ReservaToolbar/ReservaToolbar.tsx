import "./ReservaToolbar.css";

import SearchBar from "../../common/SearchBar/SearchBar";
import Button from "../../common/Button/Button";

interface Props{

pesquisa:string;

setPesquisa:(v:string)=>void;

onNova:()=>void;

}

export default function ReservaToolbar({

pesquisa,

setPesquisa,

onNova

}:Props){

return(

<div className="reserva-toolbar">

<SearchBar

value={pesquisa}

onChange={setPesquisa}

placeholder="Pesquisar reserva..."

/>

<Button

onClick={onNova}

>

Nova Reserva

</Button>

</div>

);

}