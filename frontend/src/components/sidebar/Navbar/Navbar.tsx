import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">

            <div>
                <h2>Dashboard</h2>
                <p>Sistema de gerenciamento da Sala de Informática</p>
            </div>

            <div className="navbar-right">

                <input
                    type="text"
                    placeholder="Pesquisar..."
                />

                <div className="user">

                    <div className="avatar">
                        L
                    </div>

                    <div>

                        <strong>Luiz</strong>

                        <p>Administrador</p>

                    </div>

                </div>

            </div>

        </header>
    );
}