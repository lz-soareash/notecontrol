import "./Modal.css";
import { ReactNode } from "react";

interface Props{

open:boolean;

children:ReactNode;

onClose:()=>void;

}

export default function Modal({

open,

children,

onClose

}:Props){

if(!open)

return null;

return(

<div

className="modal-overlay"

onClick={onClose}

>

<div

className="modal"

onClick={

e=>

e.stopPropagation()

}

>

{children}

</div>

</div>

);

}