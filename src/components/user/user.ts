import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  student : string | null = '' // 6th step 
// 7th step inject service
  constructor(active : ActivatedRoute){
   this.student = active.snapshot.params['id'] // 8th access param using acivated
  }
}
