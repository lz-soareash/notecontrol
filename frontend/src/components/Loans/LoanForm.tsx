import "./LoanForm.css";

export default function LoanForm(){

return(

<div className="loan-form">

<h2>Novo Empréstimo</h2>

<div className="loan-grid">

<div>

<label>Professor</label>

<select>

<option>Professor João</option>

<option>Professor Maria</option>

<option>Professor Carlos</option>

</select>

</div>

<div>

<label>Equipamento</label>

<select>

<option>Notebook Positivo 01</option>

<option>Notebook PositivoAntigo 02</option>

<option>ThinkPad 01</option>

<option>Chromebook 01</option>

</select>

</div>

<div>

<label>Turma</label>

<select>

<option>3° DS</option>

<option>2° DS</option>

<option>3° CD</option>

<option>2° CD</option>

</select>

</div>

<div>

<div>
  <label>Curso</label>
  <select>
    <option>2º Desenvolvimento de Sistemas</option>
    <option>3º Desenvolvimento de Sistemas</option>
    <option>Ciencia de Dados</option>
    <option>Farmácia</option>
    <option>Administração</option>
  </select>
</div>

<div>
  <label>Turma</label>
  <select>
    <option>2º DS</option>
    <option>3º DS</option>
    <option>2º Farmacia</option>
    <option>2º Administraçao</option>
    <option>3º CD</option>
  </select>
</div>

<label>Sala</label>

<input type="text"/>

</div>

<div>

 <label>Horário da retirada</label>

 <input type="time" />

</div>

<div>

 <label>Horário da devolução</label>

    <input type="time" />

</div>

</div>

<button>

Registrar Empréstimo

</button>

</div>

);

}