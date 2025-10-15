import { Component, Directive } from '@angular/core';
import { Calendar } from './calendar/calendar';
import { Parent } from './input/parent/parent';
import { Parent as ParentContent} from './content/parent/parent';
import { Counter } from './counter/counter';
import { Timer } from './timer/timer';
import { ParentSignal } from './input-signal/parent-signal/parent-signal';
import { Focus } from './focus/focus';
import { Post } from './post/post';


@Component({
  selector: 'app-root',
  imports: [Calendar, Parent, ParentContent, Counter, Timer, ParentSignal, Focus, Post],
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
