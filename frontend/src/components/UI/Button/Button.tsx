import "./Button.css";

type Props = {

    children: React.ReactNode;

    onClick?:()=>void;

    type?:"button"|"submit";

    variant?:"primary"|"success"|"danger";

};

export default function Button({

children,

onClick,

type="button",

variant="primary"

}:Props){

return(

<button

type={type}

className={`btn ${variant}`}

onClick={onClick}

>

{children}

</button>

);

}