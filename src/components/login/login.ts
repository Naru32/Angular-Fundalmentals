import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  router = inject(Router)  
  http = inject(HttpClient) 

  userCredentials : any = {
    EmailId:'',
    Password:''
  }

  isLoggedIn : any = false 

  onLogin(){
    this.http.post('https://projectapi.gerasim.in/api/UserApp/login',this.userCredentials).subscribe((res : any)=>{
      localStorage.setItem('Token',res.data.token)
    })
    
    this.router.navigate(['first-component'])
    }


}
