import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { ResponseUsers, RequestCreate, ResponseCreate, ResponseUser, RequestUpdate, ResponseUpdate } from './users.model';


@Injectable({
  providedIn: 'root'
  //indica que este serviço está disponível para todo o projeto
})
//Service é a classe responsável por fazer a comunicação com os endpoints da API a ser usada
export class UsersService {

  private url: string = 'https://reqres.in/api/users';
  //URL que será chamada
  constructor(private http: HttpClient) { }
  //assim que a classe é chamada o construtor cria um obj do tipo HttpClient que é o obj de coxexão http

  //-----------------------------------------GET DO ARRAY---------------------------------------------------------

  getUsers(): Observable<ResponseUsers> {
    // Método que indica a conexão GET
    // Esse método usa um obj Observable do tipo ResponseUsers
    // O Observable indica que esse obj será esperado como resposta
    return this.http.get<ResponseUsers>(this.url);
    // O método getUsers irá retornar um obj do tipo http que foi instânciado no construtor
    // Esse obj executa uma chamada http GET e passará como parâmetro a url em que será a requisição (endpoint)
    // Após a requisição o Observable ficará a espera do retorno de um obj do tipo ResponseUsers
    //O obj ResponseUsers terá entre os seus atributos o data que um array do tipo User(declarado no users.model.ts)

  }

  //-----------------------------------------GET POR ID ----------------------------------------------------------
  getUser(id: string): Observable<ResponseUser> {
    // Recebe o id do usuário por parâmetro através do método ngOnInit que captura o ID na url
    // Com esse id será feito a buscado desse usuário para ser carregado na tela a dps atualizado
    // Em seguida é declarado um observable que indica que haverá o aguardo de um obj ResponseUser como resposta
    const _url = `${this.url}/${id}`;
    //Foi criada uma constante para receber a atribuição do id (passado por parâmetro) na url padrão
    //_url = https://reqres.in/api/users/{id};
    return this.http.get<ResponseUser>(_url);
    //O this.http executará a chamada http GET passando no parâmetro a _url que indica o endpoint com o id do usuário
    //Essa chamada retornará um response com um obj do tipo ResponseUser contendo os dados do usuário solicitado
    //Esses dados serão carregados da tela para que sejam posteriormente alterados 
  }

  //-----------------------------------------POST-----------------------------------------------------------------
  createUser(request: RequestCreate): Observable<ResponseCreate> {
    //Esse método recebe do cadastrar() um obj do tipo RequestCreate que foi criado na classe users.model.ts
    //Esse obj recebe os dados inseridos nos inputs do create-user.component.html 
    //Para posteriormente ser enviado por parâmetro no request da chamada http
    //Em seguida é declarado um observable que indica que haverá o aguardo de uma resposta, no caso o retorno de um obj
    //O obj que irá retornar é do tipo ResponseCreate que também foi criado na classe users.model.ts
    //O obj ResponseCreate irá receber os dados cadastrados como resposta caso haja sucesso no cadastro
    //Foi necessário a "criação" desse obj pq a repostas retorna dados além dos dados enviados 
    return this.http.post<ResponseCreate>(this.url, request);
    //O this.http executará a chamada http POST passando no parâmetro a url que indica o endpoint que acessa a criação de usuários na API
    //Em seguida passa também o obj request que foi recebido por parâmetro
    //Caso haja sucesso no cadastro o Observable irá receber como resposta os dados cadastrados e atribui-los no ResponseCreate

  }

  //-----------------------------------------PUT------------------------------------------------------------------
  updateUser(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
    //Recebe do update os parâmetros id do usuário que será atualizado e o request com os dados para serem alterados
    //Em seguida é declarado um observable que irá aguardar o retorno de um obj ResponseUpdate como resposta
    const _url = `${this.url}/${id}`;
    //Foi criada uma constante para receber a atribuição do url padrão com o id que foi passado por parâmetro
    //_url = https://reqres.in/api/users/{id};
    return this.http.put<ResponseUpdate>(_url, request);
    //O this.http executará a chamada http PUT passando no parâmetro a _url e o obj com os dados alterados
    //Essa chamada retornará um response contendo os dados atualizados do usuário e irá atribuir no obj ResponseUpdate 
    //O Observable retornará esse obj com os dados que serão exibidos na tela
  }
  //-----------------------------------------DELETE --------------------------------------------------------------
  deleteUser(id: string): Observable<any> {
    //Recebe do delete() o parâmetro id do usuário que será deletado
    //Em seguida é declarado um Observable que retornará um obj qualquer
    const _url = `${this.url}/${id}`;
    //Foi criada uma constante para receber a atribuição do url padrão com o id que foi passado por parâmetro
    //_url = https://reqres.in/api/users/{id};
    return this.http.delete<any>(_url);
    //O this.http executará a chamada http via verbo DELETE passando no parâmetro a _url
    //Essa _url passará o id no usuário a ser deletado
    //Essa chamada retornará Observable qualquer
  }

}
