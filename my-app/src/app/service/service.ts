import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor() {
  }

  getName()
    {
      return 'Luis';
    }
}
