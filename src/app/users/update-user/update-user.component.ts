import { RequestUpdate } from './../users.model';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: string;
  //variável que receberá o id do usuário que será buscado e atualizado
  request: RequestUpdate;
  // obj que irá receber os dados do usuário que será buscado e carregado na tela para ser atualizado
  constructor(private usersService: UsersService, private route: ActivatedRoute, private _route: Router) { }
  // UsersService injeta as dependências para ter acesso aos seus serviços, no caso o getUser e updateUser
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
      //O Observable irá retornar o obj request que é do tipo RequestUpdate(declarado no users.model.ts)
      this.request = {
        //Após o retorno será atribuido os valores first_name e last_name nos atributos name e job do obj request
        //Isso permitirá faz um two-way data-binding no html e atribuir esses valores nos inputs para serem atualizados
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: ''
      }
    });
  }

  update() {
    //Após ocorrerem as alterações nos campos inputs do update-user.component.html
    //Os campos terão seus valores atribuidos automaticamente pois são do tipo ngModel two-way data-binding
    //Através do evento click com event-binding será executado o método update()
    this.usersService.updateUser(this.id, this.request).subscribe(res => {
      //O usersService acessa o seu método updateUser e passa como parâmetro o id do usuário e o obj request
      //Em seguida se inscreve para esperar o retorno do Observable
      //O Observable irá retornar com os dados atualizados e mostrará como confirmação através do alert 
      alert(`Atualizado em: ${res.updatedAt}, Nome: ${res.name}, Profissão: ${res.job}`);
      this._route.navigate(['/users']);
      //Após clicar no ok do alert será executado o this._route.navigate(['/users'])
      //O _route acessa o método navigate e direcionada para a url indicada, no caso /users 
    });
  }
}
