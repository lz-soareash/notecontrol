import "./DashboardQuickActions.css";

import { useNavigate }

from "react-router-dom";

export default function DashboardQuickActions(){

const navigate=

useNavigate();

return(

<section className="quick-actions">

<h2>

Ações Rápidas

</h2>

<div className="actions-grid">

<button

onClick={()=>navigate("/equipamentos")}

>

💻

Equipamentos

</button>

<button

onClick={()=>navigate("/carrinhos")}

>

🛒

Carrinhos

</button>

<button

onClick={()=>navigate("/reservas")}

>

📅

Reservas

</button>

<button

onClick={()=>navigate("/usuarios")}

>

👤

Usuários

</button>

</div>

</section>

);

}