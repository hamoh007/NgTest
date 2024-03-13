import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment, IPost } from './posts.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  posts$ = new Subject<IPost[]>();
  comments$ = new Subject<IComment[]>();

  constructor(private readonly httpClient: HttpClient) {}

  getAllPosts() {
    this.httpClient
      .get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((posts) => this.posts$.next(posts));
  }

  getAllCommentsByPostId(postId: number) {
    // method: get url: https://jsonplaceholder.typicode.com/posts/${postId}/comments response: IComment[]
  }
}
