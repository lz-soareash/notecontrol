import { Navigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import { Permissao } from "../../types/Permissao";

interface Props{

children:React.ReactNode;

allow:Permissao[];

}

export default function ProtectedRoute({

children,

allow

}:Props){

const{

usuario

}=useAuth();

if(!usuario)

return<Navigate to="/login"/>;

if(

!allow.includes(

usuario.permissao

)

)

return<Navigate to="/dashboard"/>;

return<>{children}</>;

}