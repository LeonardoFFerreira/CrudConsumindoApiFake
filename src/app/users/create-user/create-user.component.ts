import { UsersService } from './../users.service';
import { RequestCreate, ResponseCreate } from './../users.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  requestUser: RequestCreate = {
    //Declarando o obj do tipo RequestCreate para receber os dados do create-user.component.html e enviar via POST
    //É necessário inicializar as variáveis do obj para que elas recebem os dados e fazer o posterior envio
    name: '',
    job: ''
  }
  responseUser: ResponseCreate;
  //declarando o obj do tipo ResponseCreate para receber o response da requisição

  constructor(private usersService: UsersService) { }
  //declarando o obj do tipo UsersService para acessar o método createUser
  ngOnInit(): void {
    //Não é feito nd aqui pq o método cadastrar não é executado automaticamente qdo o componente é acessado
    //O método cadastrar() só é executado qdo houver o evento click no button
  }

  cadastrar() {
    this.usersService.createUser(this.requestUser).subscribe(res => { this.responseUser = res })
    //indicando que o obj usersService irá acessar o seu método createUser 
    //o createUser passará como parâmetro o obj requestUser, logo em seguida
    //indica que estará inscrito para ficar observando a resposta da requisição e atribui-la ao responseUser
  }
}
