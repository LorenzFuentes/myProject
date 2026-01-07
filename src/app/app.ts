import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../app/pages/service/user.js' ;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'angular-crud';
  hello: any;
  constructor(private userService: User) {
    this.hello = this.userService.getHello();
    console.log(this.hello);
  }
}
