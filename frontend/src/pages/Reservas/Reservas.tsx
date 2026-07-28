import "./Reservas.css";

import { useState } from "react";

import PageTitle from "../../components/common/PageTitle/PageTitle";
import Button from "../../components/common/Button/Button";
import Card from "../../components/common/Card/Card";

import ReservaSummary from "../../components/reservas/ReservaSummary/ReservaSummary";
import ReservaToolbar from "../../components/reservas/ReservaToolbar/ReservaToolbar";

import { carrinhos } from "../../database/carrinhos";

export default function Reservas() {

  const [pesquisa, setPesquisa] = useState("");

  const [professor, setProfessor] = useState("");

  const [carrinho, setCarrinho] = useState(1);

  const [data, setData] = useState("");

  const [retirada, setRetirada] = useState("");

  const [devolucao, setDevolucao] = useState("");

  return (

    <div className="page-content">

      <PageTitle
        title="Reservas"
        subtitle="Gerencie as reservas dos carrinhos."
      />

      <ReservaSummary

        ativas={0}

        hoje={0}

        finalizadas={0}

      />

      <ReservaToolbar

        pesquisa={pesquisa}

        setPesquisa={setPesquisa}

        onNova={() => {}}

      />

      <Card>

        <div className="reservas">

          <h2>Nova Reserva</h2>

          <div className="info-box">

            <p>

              Após confirmar a reserva, o carrinho ficará vinculado ao professor até sua devolução.

            </p>

          </div>

          <input

            placeholder="Professor"

            value={professor}

            onChange={(e) => setProfessor(e.target.value)}

          />

          <select

            value={carrinho}

            onChange={(e) => setCarrinho(Number(e.target.value))}

          >

            {carrinhos.map((cart) => (

              <option

                key={cart.id}

                value={cart.id}

              >

                {cart.nome}

              </option>

            ))}

          </select>

          <input

            type="date"

            value={data}

            onChange={(e) => setData(e.target.value)}

          />

          <input

            type="time"

            value={retirada}

            onChange={(e) => setRetirada(e.target.value)}

          />

          <input

            type="time"

            value={devolucao}

            onChange={(e) => setDevolucao(e.target.value)}

          />

          <textarea

            placeholder="Observações"

          />

          <div className="horario-info">

            Horário disponível:

            <b>

              07:00 às 16:00

            </b>

          </div>

          <Button>

            Reservar

          </Button>

          <small>

            O carrinho ficará reservado automaticamente para este professor.

          </small>

        </div>

      </Card>

    </div>

  );

}