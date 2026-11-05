import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { CapitalizePipe } from '../capitalize-pipe';
import { Button } from "../../Reusable/button/button";
import { Students } from '../../app/service/students';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, CapitalizePipe, Button],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequuntur, porro nobis totam laudantium eum aperiam enim molestiae recusandae consequatur.'
  data = {
    'username' : 'Sowmya',
    'age' : 25,
    'role' : 'Frontend developer', 
  }
  
  currentDate = new Date()

  time$ = new Observable<Date>

  currentRole = ''

  constructor(private studentSrv : Students){
    console.log(this.data)
     this.time$ = interval(1000).pipe(map(()=> new Date()))

      this.studentSrv.onRoleChanges$.subscribe((role : string)=>{
      // debugger;
      console.log(role);
      this.currentRole = role
     })

     this.studentSrv.roleBeh$.subscribe((role :string)=>{
      // debugger;
      this.currentRole = role
     })
  }




  
}
