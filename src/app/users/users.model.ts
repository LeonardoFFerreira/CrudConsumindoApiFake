//Esssa classe recebe, modela e disponibilisa os dados recebidos da API  para uso 
export interface User {
    // recebe um obj json com as informações de cada usuário
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ResponseUsers {
    //recebe um obj json com os dados do total de usuários e um arrya com os dados dos usuários
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];

}

//-------------------------------------Models para fazer o CREATE - POST-----------------------------------------
//envia os dados que serão inseridos
export interface RequestCreate {
    name: string;
    job: string;
}
//recebe o retorno dos dados como resposta após inseridos
export interface ResponseCreate {
    name: string;
    job: string;
    id: string;
    createdAt: Date;
}
//--------------------------------Models para fazer o UPDATE - PUT----------------------------------------------
//Este model servirá para fazer o GET que é necessário fazer para posteriormente fazer o PUT
export interface ResponseUser {
    //será usado o msm model da interface User pois a requisição retornará um obj com os msm atributos
    //apenas sendo inserido dentro de um obj data q seria um "ARRAY"
    data: User;
}
//-------------------------------Models do Request e Response do verbo PUT--------------------------------------
export interface RequestUpdate {
    name: string;
    job: string;
}
//recebe o retorno dos dados como resposta após inseridos
export interface ResponseUpdate {
    name: string;
    job: string;
    updatedAt: Date;
}