import {

createContext,

useContext,

useState

} from "react";

import { Usuario } from "../models/Usuario";

interface AuthContextType{

usuario:Usuario|null;

login:(usuario:Usuario)=>void;

logout:()=>void;

}

const AuthContext=

createContext<AuthContextType>(

{} as AuthContextType

);

export function AuthProvider({

children

}:{

children:React.ReactNode

}){

const[usuario,setUsuario]=

useState<Usuario|null>(()=>{

const salvo=

localStorage.getItem("usuario");

return salvo?

JSON.parse(salvo)

:null;

});

function login(

novoUsuario:Usuario

){

localStorage.setItem(

"usuario",

JSON.stringify(novoUsuario)

);

setUsuario(novoUsuario);

}

function logout(){

localStorage.removeItem(

"usuario"

);

setUsuario(null);

}

return(

<AuthContext.Provider

value={{

usuario,

login,

logout

}}

>

{children}

</AuthContext.Provider>

);

}

export function useAuth(){

return useContext(AuthContext);

}