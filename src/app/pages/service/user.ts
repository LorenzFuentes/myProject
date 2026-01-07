import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  getHello(){
    return 'Hello, I am Lorenz Sebastian C. Fuentes'
  }
}
