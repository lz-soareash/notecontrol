import "./SearchBar.css";

interface Props{

value:string;

placeholder?:string;

onChange:(

value:string

)=>void;

}

export default function SearchBar({

value,

placeholder,

onChange

}:Props){

return(

<input

className="search-bar"

value={value}

placeholder={placeholder}

onChange={

e=>

onChange(

e.target.value

)

}

/>

);

}