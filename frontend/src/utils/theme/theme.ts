export function alternarTema() {

  const body = document.body;

  body.classList.toggle("dark");

  const tema = body.classList.contains("dark")
    ? "dark"
    : "light";

  localStorage.setItem("tema", tema);

}

export function carregarTema() {

  const tema = localStorage.getItem("tema");

  if (tema === "dark") {

    document.body.classList.add("dark");

  }

}