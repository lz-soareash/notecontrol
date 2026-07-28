import "./Sidebar.css";

import { NavLink } from "react-router-dom";

import { usuarioLogado } from "../../database/usuarios";

import { FaClipboardList } from "react-icons/fa";

import {
  FaChartPie,
  FaLaptop,
  FaShoppingCart,
  FaCalendarAlt,
  FaExchangeAlt,
  FaUsers,
  FaChartBar,
  FaCog
} from "react-icons/fa";

export default function Sidebar() {

  return (

    <aside className="sidebar">

      <div className="logo">

        <h2>NoteControl</h2>

      </div>

      <nav>

        <NavLink to="/">
          <FaChartPie />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/equipamentos">
          <FaLaptop />
          <span>Equipamentos</span>
        </NavLink>

        <NavLink to="/carrinhos">
          <FaShoppingCart />
          <span>Carrinhos</span>
        </NavLink>

        <NavLink to="/reservas">
          <FaCalendarAlt />
          <span>Reservas</span>
        </NavLink>

        <NavLink to="/emprestimos">
          <FaExchangeAlt />
          <span>Empréstimos</span>
        </NavLink>

        <NavLink to="/usuarios">
          <FaUsers />
          <span>Usuários</span>
        </NavLink>

        <NavLink to="/relatorios">
          <FaChartBar />
          <span>Relatórios</span>
        </NavLink>

        <NavLink to="/configuracoes">
          <FaCog />
          <span>Configurações</span>
        </NavLink>

        <NavLink to="/minha-conta">
        👤
        <span>Minha Conta</span>
        </NavLink>

      <NavLink to="/logs">

      <FaClipboardList/>

      <span>Auditoria</span>

      </NavLink>

      </nav>

      <div className="sidebar-user">

        <img
          src="https://i.pravatar.cc/100"
          alt="Perfil"
        />

        <div>

          <strong>
            {usuarioLogado?.nome}
          </strong>

          <small>
            {usuarioLogado?.cargo}
          </small>

        </div>

      </div>

    </aside>

  );

}