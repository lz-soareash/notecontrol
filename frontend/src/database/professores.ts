export interface Professor{

id:number;

nome:string;

materia:string;

email:string;

ativo:boolean;

}

export const professores:Professor[]=[

{

id:1,

nome:"Rafael Piva",

materia:"Desenvolvimento de Sistemas",

email:"ds@escola.sp.gov.br",

ativo:true

},

{

id:2,

nome:"Professor Ciência de Dados",

materia:"Ciência de Dados",

email:"cd@escola.sp.gov.br",

ativo:true

},

{

id:3,

nome:"Professor Matemática",

materia:"Matemática",

email:"mat@escola.sp.gov.br",

ativo:true

}

];