import "./Dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";

const stats = [
  {
    title: "Notebooks",
    value: 120,
    icon: "💻",
  },
  {
    title: "Tablets",
    value: 36,
    icon: "📱",
  },
  {
    title: "Carrinhos",
    value: 6,
    icon: "🛒",
  },
  {
    title: "Em manutenção",
    value: 2,
    icon: "🔧",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="content">

        <h1>Dashboard</h1>

        <div className="cards">

          {stats.map((item) => (

            <div className="card" key={item.title}>

              <span className="icon">{item.icon}</span>

              <h2>{item.value}</h2>

              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}