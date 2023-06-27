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
        loadChildren: () => import('./components/views/user/user-list/user-list.module').then(modulo => modulo.UserListModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
