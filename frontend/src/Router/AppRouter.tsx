import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Equipamentos from "../pages/Equipamentos/Equipamentos";
import Carrinhos from "../pages/Carrinhos/Carrinhos";
import Reservas from "../pages/Reservas/Reservas";
import Emprestimos from "../pages/Emprestimos/Emprestimos";
import Usuarios from "../pages/Usuarios/Usuarios";
import Configuracoes from "../pages/Configuracoes/Configuracoes";
import Relatorios from "../pages/Relatorios/Relatorios";
import Professores from "../pages/Professores/Professores";
import Cursos from "../pages/Cursos/Cursos";
import Turmas from "../pages/Turmas/Turmas";
import ReservaCarrinho from "../pages/ReservaCarrinho/ReservaCarrinho";
import Reservar from "../pages/Reservar/Reservar";
import Login from "../pages/Login/Login";
import MinhaConta from "../pages/MinhaConta/MinhaConta";
import AlterarSenha from "../pages/AlterarSenha/AlterarSenha";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Logs from "../pages/Auditoria/Auditoria";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Área protegida */}
        <Route
          element={
            <ProtectedRoute
              cargosPermitidos={[
                "Administrador",
                "PAET",
                "Professor",
              ]}
            >
              <MainLayout />
            </ProtectedRoute>
          }
        >

          {/* Livres para qualquer usuário logado */}
          <Route index element={<Dashboard />} />
          <Route path="equipamentos" element={<Equipamentos />} />
          <Route path="carrinhos" element={<Carrinhos />} />
          <Route path="reservas" element={<Reservas />} />
          <Route path="reservar" element={<Reservar />} />
          <Route path="reservar-carrinho" element={<ReservaCarrinho />} />

          {/* Somente Administrador e PAET */}

          <Route
            path="emprestimos"
            element={
              <ProtectedRoute cargosPermitidos={["Administrador", "PAET"]}>
                <Emprestimos />
              </ProtectedRoute>
            }
          />

          <Route
            path="usuarios"
            element={
              <ProtectedRoute cargosPermitidos={["Administrador", "PAET"]}>
                <Usuarios />
              </ProtectedRoute>
            }
          />

          <Route
            path="relatorios"
            element={
              <ProtectedRoute cargosPermitidos={["Administrador", "PAET"]}>
                <Relatorios />
              </ProtectedRoute>
            }
          />

          <Route
            path="configuracoes"
            element={
              <ProtectedRoute cargosPermitidos={["Administrador", "PAET"]}>
                <Configuracoes />
              </ProtectedRoute>
            }
          />

          <Route
            path="professores"
            element={
              <ProtectedRoute cargosPermitidos={["Administrador", "PAET"]}>
                <Professores />
              </ProtectedRoute>
            }
          />

          <Route
            path="cursos"
            element={
              <ProtectedRoute cargosPermitidos={["Administrador", "PAET"]}>
                <Cursos />
              </ProtectedRoute>
            }
          />

          <Route
            path="turmas"
            element={
              <ProtectedRoute cargosPermitidos={["Administrador", "PAET"]}>
                <Turmas />
              </ProtectedRoute>
              
            }
          />

          <Route path="/minha-conta" element={<MinhaConta />} />

          <Route path="/alterar-senha" element={<AlterarSenha />} />

          <Route  path="/minha-conta"  element={<MinhaConta />} />
          
        </Route>

<Route

path="/logs"

element={

<ProtectedRoute cargosPermitidos={["Administrador","PAET"]}>

<Logs/>

</ProtectedRoute>

}

/>

      </Routes>
    </BrowserRouter>
  );
}