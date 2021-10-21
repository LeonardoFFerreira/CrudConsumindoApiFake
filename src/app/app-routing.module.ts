import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';

const routes: Routes = [
  //local onde são declaradas as rotas de acesso
  { path: 'users', component: UsersComponent },
  { path: 'users/create', component: CreateUserComponent },
  { path: 'users/update/:id', component: UpdateUserComponent },
  { path: 'users/delete/:id', component: DeleteUserComponent }
  //path indica o caminho da rota que irá acessar o compenente indicado
  //component indica qual componente será exibido como resultado dessa rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
