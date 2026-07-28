import "./Button.css";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{

variant?:
"primary"
|
"success"
|
"danger"
|
"secondary";

}

export default function Button({

variant="primary",

children,

...rest

}:ButtonProps){

return(

<button

className={`btn ${variant}`}

{...rest}

>

{children}

</button>

);

}