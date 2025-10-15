import { Component, effect, ElementRef, viewChild } from '@angular/core';
import { DirectiveFocus } from '../directivefocus/directivefocus';

@Component({
  selector: 'app-focus',
  imports: [DirectiveFocus],
  templateUrl: './focus.html',
  styleUrl: './focus.less'
})

export class Focus {
  focus = viewChild.required<ElementRef<HTMLInputElement>>('focus')

  constructor(){
    effect(()=>{
      this.focus().nativeElement.focus()
    })
  }
}
