import { NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor, UpperCasePipe, NaPipe],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  emplyeeArray:any[] =[
    {empId:121, name:"aaaa",  city:'', contactNo:"23414343"},
    {empId:121, name:"",  city:'pune', contactNo:"23414343"},
    {empId:121, name:null,  city:'pune', contactNo:"23414343"},
    {empId:121, name:"aaaa",  city:'pune', contactNo:"23414343"},
    {empId:121, name:"aaaa",  city:'pune', contactNo:"23414343"}

  ]
}
