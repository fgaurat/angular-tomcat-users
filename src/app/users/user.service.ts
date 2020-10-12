import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http:HttpClient) { }

  findAll():Observable<User[]>{
      return this.http.get<User[]>(environment.url);
  }

  save(user:User):Observable<User>{
    return this.http.post<User>(environment.url, user, this.httpOptions);
  }
}
