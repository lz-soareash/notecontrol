import "./MainLayout.css";

import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

export default function MainLayout() {

  return (

    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <main>

          <Outlet />

        </main>

      </div>

    </div>

  );

}