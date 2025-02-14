import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, NgIf],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  userObj: any={
    firstName: '',
    lastName:'',
    userName: '',
    city:'',
    state:'',
    zipCode:'',
    isTermsAgree: false
  }

  onSave(){
    const formVale = this.userObj
  }
}
