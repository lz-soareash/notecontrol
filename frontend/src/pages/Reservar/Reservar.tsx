import "./Reservar.css";

export default function Reservar() {
  return (
    <div className="reservar-page">

      <h1>Nova Reserva</h1>

      <div className="reserva-box">

        <div className="campo">
          <label>Professor</label>
          <input placeholder="Nome do professor" />
        </div>

        <div className="campo">
          <label>Carrinho</label>

          <select>

            <option>DS 2º Ano</option>

            <option>DS/CD 3º Ano</option>

            <option>Chromebook</option>

            <option>Positivo</option>

            <option>ThinkPad</option>

            <option>Tablets</option>

          </select>

        </div>

        <div className="campo">

          <label>Curso</label>

          <select>

            <option>DS</option>

            <option>Ciência de Dados</option>

            <option>Farmácia</option>

            <option>Administração</option>

          </select>

        </div>

        <div className="campo">

          <label>Turma</label>

          <select>

            <option>2º DS</option>

            <option>3º DS</option>

            <option>3º CD</option>

            <option>2º Administração</option>

            <option>2º Farmácia</option>

          </select>

        </div>

        <div className="campo">

          <label>Retirada</label>

          <input type="datetime-local" />

        </div>

        <div className="campo">

          <label>Devolução</label>

          <input type="datetime-local" />

        </div>

        <button className="btn-reservar">

          Confirmar Reserva

        </button>

      </div>

    </div>
  );
}