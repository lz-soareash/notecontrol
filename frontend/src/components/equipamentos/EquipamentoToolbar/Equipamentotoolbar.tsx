import "./EquipamentoToolbar.css";

import SearchBar from "../../common/SearchBar/SearchBar";
import Button from "../../common/Button/Button";

interface Props{
  pesquisa:string;
  setPesquisa:(v:string)=>void;
  onNovo:()=>void;
}

export default function EquipamentoToolbar({
  pesquisa,
  setPesquisa,
  onNovo
}:Props){

  return(

    <div className="equip-toolbar">

      <SearchBar
        value={pesquisa}
        onChange={setPesquisa}
        placeholder="Pesquisar equipamento..."
      />

      <Button onClick={onNovo}>
        Novo Equipamento
      </Button>

    </div>

  );

}