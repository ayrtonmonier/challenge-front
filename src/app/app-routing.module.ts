import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { NavUserComponent } from './components/template/nav-user/nav-user.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'persons',
    component: NavUserComponent, 
    children: [
      {
        path:'',
        loadChildren: () => import('./components/views/user/user-listar/user-listar.module').then(modulo => modulo.UserListarModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
