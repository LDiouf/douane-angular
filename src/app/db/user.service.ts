import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Information } from './information';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  //private baseURL = "http://localhost:8080/api/v1/employees";
  private base2URL = "http://localhost:3001/api/informations";
  private baseURL = "http://localhost:3001/api/users";
  private base1URL = "http://localhost:3001/api/login";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList():Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}`);
  }

  getComment():Observable<any>{
    return this.httpClient.get<any>(`${this.base2URL}`);
  }

  getEmployeeById(id: number): Observable<any>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, user: User): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }

  deleteEmployee(id: number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  deleteComment(id: number): Observable<object>{
    return this.httpClient.delete(`${this.base2URL}/${id}`);
  }
  

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }
  sendMail(information: Information): Observable<Object>{
    return this.httpClient.post(`${this.base2URL}`, information);
  }

  authenticate(username: string, password: string): Observable<any> {
    // Envoyez les informations d'identification au serveur pour vérification
    return this.httpClient.post<any>(`${this.base1URL}`, { username, password });
  }
}
