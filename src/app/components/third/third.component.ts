import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
})
export class ThirdComponent implements OnInit {
  posts$ = this.postsService.posts$;
  constructor(private readonly postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getAllPosts();
  }
}
