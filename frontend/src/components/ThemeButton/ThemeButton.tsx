import { FaMoon, FaSun } from "react-icons/fa";
import { alternarTema } from "../../utils/theme/theme";
import { useState } from "react";

export default function ThemeButton() {

  const [dark, setDark] = useState(
    document.body.classList.contains("dark")
  );

  function trocar() {

    alternarTema();

    setDark(
      document.body.classList.contains("dark")
    );

  }

  return (

    <button
      className="theme-button"
      onClick={trocar}
    >

      {dark ? <FaSun /> : <FaMoon />}

    </button>

  );

}