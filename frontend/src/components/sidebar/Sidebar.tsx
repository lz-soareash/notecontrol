import "./Sidebar.css";

export default function Sidebar() {
    return (
        <aside className="sidebar">

            <h2>NoteControl</h2>

            <nav>

                <button>🏠 Dashboard</button>

                <button>💻 Equipamentos</button>

                <button>🛒 Carrinhos</button>

                <button>📅 Reservas</button>

                <button>📦 Empréstimos</button>

                <button>🔧 Manutenção</button>

                <button>👤 Usuários</button>

                <button>📊 Relatórios</button>

                <button>⚙ Configurações</button>

            </nav>

            <span className="version">
                v0.1.0
            </span>

        </aside>
    );
}