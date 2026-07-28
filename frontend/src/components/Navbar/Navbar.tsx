import "./Navbar.css";

import UserMenu from "../../components/UserMenu/UserMenu";


import Button from "../common/Button/Button";

import { useAuth } from "../../context/AuthContext";

import ThemeButton from "../ThemeButton/ThemeButton";

export default function Navbar() {

  const{    

  logout

  }=useAuth();

  return (

    <header className="navbar">

  <div>

    <h2>Painel Administrativo</h2>

    <small>Gerenciamento de equipamentos</small>

  </div>

  <div
    style={{
      display:"flex",
      alignItems:"center",
      gap:"15px"
    }}
  >

  <Button

onClick={logout}

>

Sair

</Button>

    <ThemeButton/>

    <UserMenu/>

  </div>

</header>
  )
}