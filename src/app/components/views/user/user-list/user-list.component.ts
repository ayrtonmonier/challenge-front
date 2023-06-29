import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Observable, of } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;
  selectedUser: User | null = null;
  totalUsers = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(pageIndex: number = 0, pageSize: number = this.pageSize): void {
    this.userService.listar(pageIndex, pageSize).subscribe(response => {
      this.users$ = of(response.users);
      this.totalUsers = response.totalCount;
    });
  }
  
  

  showDetails(user: User): void {
    this.selectedUser = user;
  }

  closeModal(): void {
    this.selectedUser = null;
  }

  onPageChange(event: PageEvent): void {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    this.fetchUsers(pageIndex, pageSize);
  }
}
