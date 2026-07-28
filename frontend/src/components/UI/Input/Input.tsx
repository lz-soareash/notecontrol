import "./Input.css";

type Props={

placeholder?:string;

value:string;

type?:string;

onChange:(

e:React.ChangeEvent<HTMLInputElement>

)=>void;

};

export default function Input({

placeholder,

value,

type="text",

onChange

}:Props){

return(

<input

className="input"

placeholder={placeholder}

value={value}

type={type}

onChange={onChange}

/>

);

}