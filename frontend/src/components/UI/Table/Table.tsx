import "./Table.css";

type Props={

    children:React.ReactNode;

};

export default function Table({
children
}:Props){
return(
    <table className="table">

{children}

</table>
);
}