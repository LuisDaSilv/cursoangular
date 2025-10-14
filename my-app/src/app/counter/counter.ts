import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.less'
})
export class Counter {
  counter = signal<number>(0);

  increment() {
    this.counter.update(current => current + 1);
    //this.counter.set(this.counter() + 1);
  }
  
  decrement() {
    if(this.counter() > 0) {
      this.counter.update(current => current - 1);
    }
    //this.counter.set(this.counter() - 1);
  }
}
