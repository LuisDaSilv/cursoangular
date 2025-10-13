import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  name = "Luis Silva"
  data:Array<number> = []//[1,2,3,4,5,6]
  user = false

  getUser(){
    return "user"
  }

  handleclick(ev:Event){
    ev.stopPropagation()
    this.data.push(this.data.length + 1);
  }
}
