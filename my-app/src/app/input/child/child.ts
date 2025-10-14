import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.less'
})
export class Child {
  @Input() value: number=0;
  @Output() page = new EventEmitter<number>();
  
  notifyChange(){
    this.page.emit(this.value);
  }
}
