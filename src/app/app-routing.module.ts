import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'list', component:ListComponent},
  {path: 'create', component:CreateComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
