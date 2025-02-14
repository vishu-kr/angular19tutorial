import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19tutorial';
  subMenu: boolean= false
  subAPIMenu: boolean= false

  openSubMenu(){
    this.subMenu = !this.subMenu
  }

  openAPISubMenu(){
    this.subAPIMenu = !this.subAPIMenu
  }
}
