import "./Usuarios.css";

import ProfessorCard from "../../components/ProfessorCard/ProfessorCard";

import { professores } from "../../database/professores";

export default function Usuarios(){

return(

<div className="usuarios-page">

<h1>Professores</h1>

<div className="grid">

{professores.map(prof=>(

<ProfessorCard

key={prof.id}

professor={prof}

/>

))}

</div>

</div>

);

}