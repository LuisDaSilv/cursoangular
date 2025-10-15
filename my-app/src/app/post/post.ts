import { Component } from '@angular/core';
import { PostComments } from './post-comments/post-comments';
import { Service } from '../service/service';

@Component({
  selector: 'app-post',
  imports: [PostComments],
  templateUrl: './post.html',
  styleUrl: './post.less'
})
export class Post {
  constructor(private service:Service) {
    console.log(this.service.getName());
   }
}
