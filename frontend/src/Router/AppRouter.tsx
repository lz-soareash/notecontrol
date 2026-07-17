import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Equipamentos from "../pages/dashboard/equipamentos/equipamentos";
import Carrinhos from "../pages/dashboard/Carrinhos/Carrinhos";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/equipamentos" element={<Equipamentos />} />

        <Route path="/carrinhos" element={<Carrinhos />} />

      </Routes>
    </BrowserRouter>
  );
}