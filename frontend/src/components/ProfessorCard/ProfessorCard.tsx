import "./ProfessorCard.css";

import { Professor } from "../../database/professores";

interface Props{

professor:Professor;

}

export default function ProfessorCard({professor}:Props){

return(

<div className="prof-card">

<h2>{professor.nome}</h2>

<p>{professor.materia}</p>

<p>{professor.email}</p>

<span>

{professor.ativo?"Ativo":"Inativo"}

</span>

</div>

);

}