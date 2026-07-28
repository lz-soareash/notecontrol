import "./CartCard.css";

import { Cart } from "../../database/carrinhos";

import { professores } from "../../database/professores";

import { useNavigate } from "react-router-dom";

interface Props {
  cart: Cart;
}

export default function CartCard({ cart }: Props) {
    const navigate = useNavigate();
    const professor=professores.find(
     
      
p=>p.id===cart.professorId

);
  return (
    <div className="cart-card">

      <div className="cart-header">

        <h2>{cart.nome}</h2>

        <span className={cart.status.toLowerCase().replace(" ", "-")}>
          {cart.status}
        </span>

      </div>

      <p>
        <strong>Tipo:</strong> {cart.tipo}
      </p>

      <p>
        <strong>Curso:</strong> {cart.curso}
      </p>

      <p>
        <strong>Equipamentos:</strong> {cart.quantidade}
      </p>

      <p>
        <strong>Professor:</strong>{" "}
        {professor?.nome ?? "Qualquer Professor"}
      </p>

      <p>
        <strong>Uso:</strong>{" "}
        {cart.exclusivo ? "Exclusivo" : "Compartilhado"}
      </p>

      <button

onClick={() => navigate("/reservar")}

>

Reservar

</button>

    </div>
  );
}