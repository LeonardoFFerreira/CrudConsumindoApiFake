import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  id: string;
  //variável que receberá o id do usuário que será buscado e deletado
  user: User;
  // obj que irá receber os dados do usuário que será buscado e carregado na tela para ser deletado
  constructor(private usersService: UsersService, private route: ActivatedRoute, private _route: Router) { }
  // UsersService injeta as dependências para ter acesso aos seus serviços, no caso o getUser e deleteUser
  //ActivatedRoute injeta as dependências que permitem ter acesso ao route.snapshot.paramMap.get()
  //Isso permite capturar o id do usuário que foi passado na url e atribui-lo em this.id
  //Router injeta as dependências que permitem ter acesso ao navigate()
  //O navigate() permite direcionar para uma url específica
  ngOnInit(): void {
    //Método que é executado automaticamente qdo o componente é inicializado
    this.id = this.route.snapshot.paramMap.get('id');
    //Captura no fim na url o id do usuário e atribui na variável id
    this.usersService.getUser(this.id).subscribe(res => {
      //Acessa o método getUser do obj usersService e passa como parâmetro o id do usuário
      //Em seguida se inscreve para esperar o retorno do Observable
      //O Observable irá retornar o obj user que é do tipo User(declarado no users.model.ts)
      this.user = res.data;
      //O retorno será um obj data que é um array de user, ele será atribuido  obj user
      //Será feito o two-way data-binding no html e atribuido os valores nos inputs para serem confirmados 
    });
  }
  delete() {
    //Os campos terão seus valores atribuidos automaticamente pois são do tipo ngModel two-way data-binding
    //Através do evento click com event-binding será executado o método delete()
    this.usersService.deleteUser(this.id).subscribe(res => {
      //O usersService acessa o seu método deleteUser e passa como parâmetro o id do usuário a ser deletado
      //Em seguida se inscreve para esperar o retorno do Observable
      //O Observable terá um retorno qualquer, mas após o recebimento desse retorno será executado o alert abaixo  
      alert('Removido com sucesso!');
      //Irá mostrar através do alert uma msg de confirmação da deleção
      this._route.navigate(['/users']);
      //Após clicar no ok do alert será executado o this._route.navigate(['/users'])
      //O _route acessa o método navigate e direcionada para a url indicada, no caso /users 
    });
  }
  cancel() {
    //Ao clicar no botão cancelar o event-binding do evento click irá executar o método cancel()
    //O método cancela a deleção do usuário executando o this._route.navigate([]);
    this._route.navigate(['/users']);
    //O _route acessa o método navigate e direcionada para a url indicada, no caso /users 
  }

}
