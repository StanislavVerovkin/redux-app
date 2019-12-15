import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://api.chucknorris.io/';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) {
  }

  getRepos(): Observable<any> {
    return this.http.get(`${BASE_URL}${`jokes/random`}`);
  }

  getPulls(): Observable<any> {
    return this.http.get(`${BASE_URL}${`jokes/random`}`);
  }
}
