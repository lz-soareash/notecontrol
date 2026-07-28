import "./DashboardGreeting.css";

export default function DashboardGreeting(){

const hora=

new Date().getHours();

let saudacao="Boa noite";

if(hora<12){

saudacao="Bom dia";

}

else if(hora<18){

saudacao="Boa tarde";

}

const data=

new Date().toLocaleDateString(

"pt-BR",

{

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

}

);

return(

<section className="dashboard-greeting">

<div>

<h1>

{saudacao},

Luiz 👋

</h1>

<p>

Bem-vindo ao

<strong>

 NoteControl

</strong>

</p>

</div>

<div className="dashboard-date">

{data}

</div>

</section>

);

}