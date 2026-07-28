import "./Badge.css";

interface Props{

text:string;

color?:

"green"

|

"blue"

|

"yellow"

|

"red";

}

export default function Badge({

text,

color="blue"

}:Props){

return(

<span

className={`badge ${color}`}

>

{text}

</span>

);

}