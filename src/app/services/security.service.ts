import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../entities/login-response';
import { Observable } from 'rxjs';
import { LoginRequest } from '../entities/login-request';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  url: string
  module: string = ''

  constructor(private http: HttpClient) { 
    this.url = environment.API_URL;
  }

  public login(user: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.url}/login`,user)
  }

}
