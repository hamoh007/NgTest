import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
})
export class ThirdComponent implements OnInit {
  posts$ = this.postsService.posts$;
  comments$ = this.postsService.comments$;

  selectControl = new FormControl();
  constructor(private readonly postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getAllPosts();
  }
}
