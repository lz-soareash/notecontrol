import "./DashboardSection.css";

type Props={

titulo:string;

children:any;

};

export default function DashboardSection({

titulo,

children

}:Props){

return(

<section className="dashboard-section">

<h3>{titulo}</h3>

{children}

</section>

);

}