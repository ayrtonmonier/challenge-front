import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as userModel from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080';
  private endpoint = 'persons';

  constructor(private httpClient: HttpClient) { }


  listar(): Observable<userModel.User[]> {
    return this.httpClient.get<userModel.User[]>(`${this.baseUrl}/${this.endpoint}`);
  }
  
}
