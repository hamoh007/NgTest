import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './data.models';
import { Subject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  users$ = new Subject<IUser[]>();

  constructor(private readonly httpClient: HttpClient) {}

  getUsers() {
    // method: get url: 'https://jsonplaceholder.typicode.com/users' response: IUser[]
  }
}
