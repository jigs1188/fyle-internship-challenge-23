// github.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from './repository.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  searchRepositories(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`https://api.github.com/users/${username}/repos`);
  }
}
