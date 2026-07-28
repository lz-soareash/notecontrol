import { usuarios } from "../database/usuarios";

export class AuthService{

static login(email:string){

return usuarios.find(

u=>u.email===email

);

}

}