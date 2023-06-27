import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-listar',
  templateUrl: './user-listar.component.html',
  styleUrls: ['./user-listar.component.css']
})
export class UserListarComponent implements OnInit{

  users$: Observable<User[]> = new Observable<User[]>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.listarUsers();
  }

  listarUsers(){
    this.users$ = this.userService.listar();
  }
}
