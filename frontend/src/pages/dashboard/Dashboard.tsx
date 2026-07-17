import "./Dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/sidebar/Navbar/Navbar";
import Card from "../../components/cards/Cards";
import {
    FaLaptop,
    FaTabletAlt,
    FaShoppingCart,
    FaTools
} from "react-icons/fa";

const stats = [

    {

        title:"Notebooks",

        value:120,

        icon:FaLaptop

    },

    {

        title:"Tablets",

        value:36,

        icon:FaTabletAlt

    },

    {

        title:"Carrinhos",

        value:6,

        icon:FaShoppingCart

    },

    {

        title:"Em manutenção",

        value:2,

        icon:FaTools

    }

]

export default function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="content">

       <Navbar />

       <div className="cards">

    {stats.map((item) => (

        <Card
            key={item.title}
            icon={item.icon}
            title={item.title}
            value={item.value}
        />

    ))}

</div>
      </main>

    </div>
  );
}