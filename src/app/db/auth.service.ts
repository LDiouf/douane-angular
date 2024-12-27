import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  private base1URL = "http://localhost:3000/api/login";

  isLoggedIn: any = false;
  redirectUrl!: string;

  login(email: string, password: string): Observable<boolean> {
    return this.httpClient.post<any>(this.base1URL, { email, password }).pipe(
      map((response) => {
        // Assuming the server returns a boolean indicating success or failure
        return response.success === true;
      })
    );
  }
  

  //authenticate(username: string, password: string): Observable<any> {
    // Envoyez les informations d'identification au serveur pour vérification
    //return this.httpClient.post<any>(`${this.base1URL}`, { username, password });
  //}

  logout(){
    this.isLoggedIn = false;

  }
}



