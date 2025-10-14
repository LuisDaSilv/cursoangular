import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent-content',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.less'
})
export class Parent {

}
