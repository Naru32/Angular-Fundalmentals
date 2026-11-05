import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-post-api',
  imports: [],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css',
})
export class PostApi {

  client = inject(HttpClient)

  payload = {
    name:'Shruti',
    age:24,
    role:'Admin'
  }

  createUser(payload : any){
   let res = this.client.post('http://localhost:3001/users',payload)
  res.subscribe((p)=>{
    console.log('User created ');
  })
  }

  constructor(){
    // this.createUser(this.payload)
  }

}
