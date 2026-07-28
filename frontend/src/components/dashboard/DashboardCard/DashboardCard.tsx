import "./DashboardCard.css";

type Props = {

title:string;

value:string|number;

icon:any;

color?:string;

};

export default function DashboardCard({

title,

value,

icon:Icon,

color="#2563eb"

}:Props){

return(

<div className="dashboard-card">

<div>

<p>{title}</p>

<h2>{value}</h2>

</div>

<div

className="dashboard-icon"

style={{

background:color

}}

>

<Icon/>

</div>

</div>

);

}