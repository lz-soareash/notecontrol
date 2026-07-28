import { ReactNode } from "react";

import { useAuth } from "../../context/AuthContext";

import { Permissao } from "../../types/Permissao";

interface Props{

allow:Permissao[];

children:ReactNode;

}

export default function PermissionGate({

allow,

children

}:Props){

const{

usuario

}=useAuth();

if(!usuario) return null;

if(!allow.includes(usuario.permissao))

return null;

return<>{children}</>;

}