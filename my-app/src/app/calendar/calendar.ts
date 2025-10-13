import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calendar',
  imports: [],
  templateUrl: './calendar.html',
  styleUrl: './calendar.less'
})
export class Calendar {
  now = new Date();
  days = new Date(this.now.getFullYear(), this.now.getMonth()+1, 0).getDate();
  data:Array<number> = Array(this.days).fill(0).map((_, i) => i + 1);

  @HostListener('click', ['$event'])
  handleclick(ev:Event){

    const {dataset} = (ev.target as HTMLElement);
    const {index} = dataset || {};

    if(index){
      console.log(this.data[Number(index)]);
    }
  }

  isMultipleOfFive(number:number) {
    return number % 5 === 0;
  }
}
