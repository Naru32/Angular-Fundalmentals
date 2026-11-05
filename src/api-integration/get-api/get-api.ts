import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi {
// get api integration

editID = null

payload : any = {
  id:'',
  name:'',
  age:'',
  role:''
}

// token = localStorage.getItem('Token')

// constructor(){
//   console.log(typeof this.token);
// }
api = inject(HttpClient)
student : any = []
  getUsers(){
   let data = this.api.get('https://projectapi.gerasim.in/api/UserApp/GetAllUsers')
  data.subscribe((val)=>{
   this.student = val
   })
  }


  deleteUser(id : any){
   let res = this.api.delete(`http://localhost:3000/users/${id}`)
  res.subscribe((val)=>{
    console.log('Delete successfully',val)
   }); 
  }

  editUser(id : any){
  this.editID = id
  let res = this.api.get(`http://localhost:3000/users/${id}`)
  res.subscribe((val)=>{
    this.payload = val
    console.log(this.payload)
  })


  }
}
