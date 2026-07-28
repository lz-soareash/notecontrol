import {
usuarios,
Usuario
} from "../database/usuarios";

export class UsuarioService{

static listar():Usuario[]{

return usuarios;

}

static buscar(id:number){

return usuarios.find(

u=>u.id===id

);

}

}