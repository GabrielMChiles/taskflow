import { Component, signal } from '@angular/core';
import {Route, Router, RouterOutlet} from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private router: Router){}

  navegarPara(rota: string) {
    this.router.navigate([rota]);
  }

}
