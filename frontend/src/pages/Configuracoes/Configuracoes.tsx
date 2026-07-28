import "./Configuracoes.css";
import { useState } from "react";
import BackupManager from "../../components/Backup/BackupManager";

export default function Configuracoes() {

  const [nomeEscola,setNomeEscola] =
    useState("Escola Estadual");

  const [modoEscuro,setModoEscuro] =
    useState(false);

  const [backupAutomatico,setBackupAutomatico] =
    useState(true);

  const [tempoReserva,setTempoReserva] =
    useState(2);

  function salvar(){

    alert("Configurações salvas!");

  }

  return(

    <div className="page-content">

      <h1>Configurações</h1>

      <div className="config-card">

        <label>Nome da Escola</label>

        <input
          value={nomeEscola}
          onChange={(e)=>setNomeEscola(e.target.value)}
        />

      </div>

      <div className="config-card">

        <label>Tempo padrão da reserva (horas)</label>

        <input
          type="number"
          value={tempoReserva}
          onChange={(e)=>
            setTempoReserva(Number(e.target.value))
          }
        />

      </div>

      <div className="config-card">

        <label>

          <input
            type="checkbox"
            checked={modoEscuro}
            onChange={()=>
              setModoEscuro(!modoEscuro)
            }
          />

          Modo Escuro

        </label>

      </div>

      <div className="config-card">

        <label>

          <input
            type="checkbox"
            checked={backupAutomatico}
            onChange={()=>
              setBackupAutomatico(!backupAutomatico)
            }
          />

          Backup Automático

        </label>

      </div>

      <button
        className="save-btn"
        onClick={salvar}
      >

        Salvar Configurações

      </button>

      <BackupManager />
      
    </div>

  );

}