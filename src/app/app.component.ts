import { Component } from '@angular/core';
import { NgIfComponent } from "./components/ng-if/ng-if.component";
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from "./components/ng-class/ng-class.component";
import { NgStyleComponent } from "./components/ng-style/ng-style.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NgForComponent, NgClassComponent, NgStyleComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19tutorial';
}
