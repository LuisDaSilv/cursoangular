import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calendar } from './calendar/calendar';


@Component({
  selector: 'app-root',
  imports: [Calendar],
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
