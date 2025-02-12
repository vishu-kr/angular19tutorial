import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle, FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  isChecked: boolean= true

  cssAsObject: any={
    'background-color':'red',
    'width':'100px',
    'height':'100px'
  }
}
