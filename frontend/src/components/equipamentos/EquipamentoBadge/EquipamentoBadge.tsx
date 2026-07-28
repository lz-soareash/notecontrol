import "./EquipamentoBadge.css";

import {

StatusEquipamento

}

from "../../../database/equipamentos";

type Props={

status:StatusEquipamento;

}

export default function EquipamentoBadge({

status

}:Props){

return(

<span

className={

`badge ${status}`

}

>

{status}

</span>

);

}