import "./Card.css";
import { ReactNode } from "react";

interface Props{

children:ReactNode;

}

export default function Card({

children

}:Props){

return(

<div className="card">

{children}

</div>

);

}