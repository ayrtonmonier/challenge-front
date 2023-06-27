import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> = of([]);
  selectedUser: User | null = null;

  @ViewChild('modal') modalTemplate!: TemplateRef<any>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.listarUsers();
  }

  listarUsers() {
    this.userService.listar().subscribe(
      (response: any) => {
        this.users$ = of(response.users);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showDetails(user: User) {
    this.selectedUser = user;
    this.openModal();
  }

  openModal() {
    // Lógica para abrir o modal
  }

  closeModal() {
    // Lógica para fechar o modal
    this.selectedUser = null;
  }
}
