import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  div1BgColor: string="success"

  addDiv1Color(className: string){
    this.div1BgColor = className
  }
}
