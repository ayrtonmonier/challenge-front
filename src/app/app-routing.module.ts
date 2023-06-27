import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { UsersReadComponent } from './components/views/users-read/users-read.component';
import { NavUserComponent } from './components/template/nav-user/nav-user.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'users',
    component: NavUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
