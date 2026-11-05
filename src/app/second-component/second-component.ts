import { Component, inject, NgModule } from '@angular/core';
import { Students } from '../service/students';
import { Card } from '../../Reusable/card/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-second-component',
  imports: [Card, CommonModule, FormsModule, RouterLink],
  templateUrl: './second-component.html',
  styleUrl: './second-component.css',
  standalone:true
})

export class SecondComponent {

  // first way to use service manually without DI by creating service class object manually

  // constructor(){
  // let student =  new Students()
  // console.log(student.students);
  // student.fetchStudent()
  // }

  // 1. Tight coupling: 
  // 2. Hard for unit testing
  // 3 Memory leak

  // second way to use service by DI
  // first way of injecting service by constructor old approach
  // constructor(studentService : Students){}

  // second way injecting service of using inject()
  // studentService = inject(Students)

  student ={
    name:'Sakshi',
    age:23,
    gender:'Female',
    collegeName:'Wadia college'
  }

  currentRole = ''

  constructor(private studentSrv : Students){
    // this.studentService.fetchStudent()

    this.studentSrv.onRoleChanges$.subscribe((role : string)=>{
      // debugger;
      console.log(role);
      this.currentRole = role
     }) 

     this.studentSrv.roleBeh$.subscribe((role:string)=>{
      // debugger;
      this.currentRole = role
     })
  }
  
  change(){
      this.student = {
    name:'Sharu',
    age:24,
    gender:'Female',
    collegeName:'Nelson'
  }
  }

  studentInfo = ''
  isDirty = false

  onChange(e : Event){
    console.log(e);
    this.isDirty = true
  }

}
