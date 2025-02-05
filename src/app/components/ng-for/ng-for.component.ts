import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  emplyeeArray:any[] =[
    {empId:121, name:"aaaa",  city:'pune', contactNo:"23414343"},
    {empId:121, name:"aaaa",  city:'pune', contactNo:"23414343"},
    {empId:121, name:"aaaa",  city:'pune', contactNo:"23414343"},
    {empId:121, name:"aaaa",  city:'pune', contactNo:"23414343"},
    {empId:121, name:"aaaa",  city:'pune', contactNo:"23414343"}

  ]
}
