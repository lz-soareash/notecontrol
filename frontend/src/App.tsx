import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

function Login() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#F8FAFC",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          width: 400,
          padding: 40,
          background: "#FFFFFF",
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
        }}
      >
        <h1
          style={{
            marginBottom: 8,
            color: "#2563EB",
          }}
        >
          NoteControl
        </h1>

        <p style={{ color: "#6B7280", marginBottom: 30 }}>
          Sistema de Gestão da Sala de Informática
        </p>

        <input
          type="text"
          placeholder="Usuário"
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 15,
            borderRadius: 8,
            border: "1px solid #D1D5DB",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Senha"
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 20,
            borderRadius: 8,
            border: "1px solid #D1D5DB",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            width: "100%",
            padding: 12,
            background: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}