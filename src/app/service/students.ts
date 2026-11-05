import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Students {

  client = inject(HttpClient)

  onRoleChanges$ : Subject<string> = new Subject<string>()
  roleBeh$ : BehaviorSubject<string> = new BehaviorSubject<string>("")



  //  students : any[] = [
  //   {stId : 1, name:'Naru',age:23, isActive:true, gender:'male'},
  //   {stId : 2, name:'Sharu',age:24, isActive:false,gender:'female'},
  //   {stId : 3, name:'Aj',age:33, isActive:false,gender:'female'},
  //   {stId : 4, name:'Rahul',age:33, isActive:true,gender:'male'}
  // ]

  fetchStudent(){
    const res = this.client.get('https://jsonplaceholder.typicode.com/users')
    console.log('Fetched successfully')
  }
}
