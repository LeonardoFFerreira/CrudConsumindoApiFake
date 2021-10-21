import { Component, OnInit } from '@angular/core';

import { ResponseUsers } from './users.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  responseUsers: ResponseUsers;
  //Instânciando o obj responseUsers do tipo ResponseUsers da clase users.model
  //Esse obj recebe os dados da resposta(response) do Observable do método getUsers da classe de serviço UsersService
  constructor(private UsersService: UsersService) { }
  //Indicando que sempre que o componente for chamado ele irá criar um obj UsersService do tipo UsersService
  //Esse obj serve para acessar o método getUsers que foi criado na sua classe de serviço UsersService
  ngOnInit(): void {
    //Método que é executado automaticamente sempre que o componente é chamado

    this.UsersService.getUsers().subscribe(res => this.responseUsers = res)
    //O UsersService executa o seu método getUsers solicitando a lista de usuários 
    //Em seguida indica que ele está inscrito para esperar o retorno do Observable
    //       !!!!!!!       Ver o que foi feito em (res => this.responseUsers = res)           !!!!!!!!!!!!!!!!!
  }

}
