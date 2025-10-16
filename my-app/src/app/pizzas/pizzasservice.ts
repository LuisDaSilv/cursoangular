import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class Pizzasservice {
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Pizza[]>('http://localhost:3000/pizzas');
  }
}
