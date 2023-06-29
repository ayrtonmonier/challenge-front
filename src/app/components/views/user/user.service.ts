import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080';
  private endpoint = 'persons';

  constructor(private httpClient: HttpClient) { }
  
  listar(pageIndex: number = 1, pageSize: number = 10): Observable<{ users: User[], totalCount: number }> {
    const adjustedPageIndex = pageIndex + 1; // Adiciona 1 ao valor do pageIndex
  
    const params = new HttpParams()
      .set('page', adjustedPageIndex.toString())
      .set('size', pageSize.toString());
  
    return this.httpClient.get<{ users: User[], totalCount: number }>(`${this.baseUrl}/${this.endpoint}`, { params });
  }
}
