import { Component, HostListener, signal } from '@angular/core';
import { Pizza } from '../pizza';
import { Pizzaitem } from '../pizzaitem/pizzaitem';
import { Pizzasservice } from '../pizzasservice';

@Component({
  selector: 'app-pizzalist',
  imports: [Pizzaitem],
  templateUrl: './pizzalist.html',
  styleUrl: './pizzalist.less'
})
export class Pizzalist {
  pizzas = signal<Pizza[]>([]);

constructor(private service:Pizzasservice){
  this.service.getAll().subscribe((pizzas)=>{
    this.pizzas.set(pizzas)
  })
}

  @HostListener('click',['$event'])
  selectPizza(ev:Event){
    ev.stopPropagation()
    const {dataset}=(ev.target as HTMLElement)
    if(dataset){
      const {pizzaId} = dataset
      console.log(pizzaId)
    }
  }
}
