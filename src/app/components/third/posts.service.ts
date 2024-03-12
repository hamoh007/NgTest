import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './posts.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  posts$ = new Subject<IPost[]>();

  constructor(private readonly httpClient: HttpClient) {}

  getAllPosts() {
    this.httpClient
      .get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((posts) => this.posts$.next(posts));
  }
}
