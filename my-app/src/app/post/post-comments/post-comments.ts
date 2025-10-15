import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post-comments',
  imports: [],
  templateUrl: './post-comments.html',
  styleUrl: './post-comments.less',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PostComments {
  comments: string[] = [];

  constructor() {
    for (let index: number = 1; index <= 100; index++) {
      this.comments.push('Comment ' + index);
    }
  }
}
