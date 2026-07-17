import "./EquipmentDrawer.css";

interface Props{

    open:boolean;

    onClose:()=>void;

    equipamento:any;

}

export default function EquipmentDrawer({

    open,

    onClose,

    equipamento

}:Props){

    if(!equipamento) return null;

    return(

        <>

            <div

                className={`overlay ${open ? "show":""}`}

                onClick={onClose}

            />

            <aside className={`drawer ${open ? "open":""}`}>

                <div className="drawer-header">

                    <h2>{equipamento.nome}</h2>

                    <button onClick={onClose}>
                        ✕
                    </button>

                </div>

                <div className="drawer-body">

                    <div>

                        <strong>Patrimônio</strong>

                        <p>{equipamento.patrimonio}</p>

                    </div>

                    <div>

                        <strong>Marca</strong>

                        <p>{equipamento.marca}</p>

                    </div>

                    <div>

                        <strong>Tipo</strong>

                        <p>{equipamento.tipo}</p>

                    </div>

                    <div>

                        <strong>Status</strong>

                        <p>{equipamento.status}</p>

                    </div>

                    <div>

                        <strong>Carrinho</strong>

                        <p>{equipamento.carrinho}</p>

                    </div>

                    <div>

                        <strong>Slot</strong>

                        <p>{equipamento.slot}</p>

                    </div>

                </div>

                <div className="drawer-footer">

                    <button className="editar">
                        Editar
                    </button>

                    <button className="excluir">
                        Excluir
                    </button>

                </div>

            </aside>

        </>

    )

}