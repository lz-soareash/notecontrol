import "./Card.css";
import { IconType } from "react-icons";

interface CardProps{
    icon: IconType;
    title:string;
    value:number|string;
}

export default function Card({
    icon:Icon,
    title,
    value
}:CardProps){

    return(

        <div className="card">

            <div className="card-icon">
                <Icon size={30}/>
            </div>

            <div className="card-info">

                <h2>{value}</h2>

                <p>{title}</p>

            </div>

        </div>

    )

}